/* istanbul ignore file */
/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gql, useMutation } from '@apollo/client';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from './Buttons';
import { UserContext } from '../hook/useAuth';
import Spinner from './Spinner';

const UPLOAD_RESUME = gql`
  mutation UploadResume($userId: ID!, $resume: String!) {
    uploadResume(userId: $userId, resume: $resume) {
      resume
    }
  }
`;

interface UploadFormProps {
  uploadType: number | null;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  link: string | null;
  setLink: React.Dispatch<React.SetStateAction<string | null>>;
  saveFile: () => void;
  file: File | null;
  closeModal: () => void;
  t: (key: string) => string;
  loading: boolean;
}

function UploadForm({
  uploadType,
  handleFileUpload,
  link,
  setLink,
  saveFile,
  file,
  closeModal,
  t,
  loading,
}: UploadFormProps) {
  return (
    <form action="" className="font-serif">
      {uploadType === 0 && (
        <div>
          <h2 className="pt-4 pb-4 text-lg font-medium">
            {t('Upload resume from your computer')}
          </h2>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={handleFileUpload}
            className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:text-dark-text-fill dark:border-white"
          />
        </div>
      )}
      {uploadType === 1 && (
        <div>
          <h2 className="pt-4 pb-4 text-lg font-medium">
            {t('Upload resume from external link')}
          </h2>
          <input
            type="text"
            name="resume"
            id="resume"
            placeholder="Enter external link"
            value={link || ''}
            onChange={(e) => setLink(e.target.value)}
            className="relative block w-full p-3 text-black border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:text-black dark:border-white"
          />
        </div>
      )}
      <Button
        disabled={uploadType === 0 ? !file : !link || link.trim() === ''}
        variant="primary"
        size="lg"
        style="m-0 mt-4 rounded-[6px]"
        onClick={saveFile}
      >
        {loading ? <Spinner /> : t('Upload')}
      </Button>
    </form>
  );
}

function Resume() {
  const [uploadType, setUploadType] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState<string | null>(null);
  const [UploadResume, { loading }] = useMutation(UPLOAD_RESUME);
  const [uploadedResumeLink, setUploadedResumeLink] = useState<string | null>(
    null,
  );
  const { user } = useContext(UserContext);

  const [spinner, setSpinner] = useState(false);
  const [spinnerLink, setSpinnerLink] = useState(false);
  const [isPdfDisplayed, setIsPdfDisplayed] = useState(false);
  const [display, setDisplay] = useState('Preview');

  const [previewPdf, setPreviewPdf] = useState<string | null>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const { t } = useTranslation();

  const closeModal = () => {
    setUploadType(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      const allowedTypes = ['application/pdf'];

      if (uploadedFile) {
        if (allowedTypes.includes(uploadedFile.type)) {
          setFile(uploadedFile);
          setUploadType(0);
        } else {
          toast.error('Please upload a PDF file.');
        }
      } else {
        setFile(null);
      }
    }
  };

  const saveFile = async () => {
    if (uploadType === 0 && file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'mydocs');
      formData.append('resource_type', 'raw');
      try {
        if (file && file.type === 'application/pdf') {
          setButtonLoading(true);

          const resume = await axios.post(
            `${process.env.RESUME_URL}`,
            formData,
          );

          setSpinner(true);

          const updated = await UploadResume({
            variables: {
              userId: user.userId,
              resume: resume?.data?.secure_url,
            },
          });

          setSpinner(false);

          setUploadedResumeLink(resume?.data?.secure_url);

          setPreviewPdf(resume?.data?.secure_url);

          toast.success('Resume uploaded successfully!');
          setButtonLoading(false);
          setFile(null);
        } else {
          toast.error('Please upload a PDF file.');
        }
      } catch (error) {
        const typedError = error as Error;
        toast.error(`Error uploading resume: ${typedError.message}`);
        setButtonLoading(false);
      }
    }

    if (uploadType === 1 && link) {
      try {
        setSpinnerLink(true);

        const updated = await UploadResume({
          variables: { userId: user.userId, resume: link },
        });

        setSpinnerLink(false);

        setUploadedResumeLink(link);
        toast.success('Resume link added successfully!');
        setButtonLoading(false);
        setLink('');
      } catch (error) {
        toast.error('Error adding resume link. Please try again.');
        setButtonLoading(false);
      }
    }
  };

  return (
    <>
      <div className="w-full h-96 p-5 flex flex-col gap-4">
        {uploadType !== 0 && uploadType !== 1 && (
          <div className="pb-5 flex gap-2 downbuttons">
            <Button
              variant="primary"
              size="lg"
              data-testid="registerModel"
              style="m-0"
              onClick={() => {
                setUploadType(0);
              }}
            >
              {t('Upload from your pc')}
            </Button>

            <Button
              variant="primary"
              size="lg"
              data-testid="registerModel"
              style="m-0"
              onClick={() => {
                setUploadType(1);
              }}
            >
              {t('Add external link')}
            </Button>
          </div>
        )}

        {(uploadType === 0 || uploadType === 1) && (
          <div className="w-full">
            <div className="flex gap-2 upbuttons">
              <Button
                variant="primary"
                size="lg"
                data-testid="registerModel"
                style="m-0"
                onClick={() => {
                  setUploadType(0);
                }}
              >
                {t('Upload from your pc')}
              </Button>

              <Button
                variant="primary"
                size="lg"
                data-testid="registerModel"
                style="m-0"
                onClick={() => {
                  setUploadType(1);
                }}
              >
                {t('Add external link')}
              </Button>
            </div>
            <UploadForm
              uploadType={uploadType}
              handleFileUpload={handleFileUpload}
              link={link}
              setLink={setLink}
              saveFile={saveFile}
              file={file}
              closeModal={closeModal}
              loading={buttonLoading}
              t={t}
            />
          </div>
        )}

        {uploadedResumeLink && (
          <div>
            <div className="mt-5">
              <Button
                variant="secondary"
                size="md"
                style="mt-3"
                onClick={() => {
                  setPreviewPdf(null);
                  setIsPdfDisplayed(!isPdfDisplayed);
                }}
              >
                {isPdfDisplayed ? <h2>Close</h2> : <h2>{display}</h2>}
              </Button>

              {isPdfDisplayed && (
                <div className="mt-3">
                  <embed
                    src={uploadedResumeLink}
                    className="w-full"
                    style={{ height: '1000px' }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Resume;
