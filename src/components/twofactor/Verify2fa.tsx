 /* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader1 from '../../components/loaders/loader2/index';
import { VERIFY_ONE_TIME_CODE } from '../../Mutations/Twofactor2fa';
import { GET_PROFILE } from '../../Mutations/User';

const VerifyOneTimeCodeComponent: React.FC = () => {
  const [code, setCode] = useState('');
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);

  // Fetch user's profile to get the email
  const { loading, error, data } = useQuery(GET_PROFILE);

  const [verifyOneTimeCode] = useMutation(VERIFY_ONE_TIME_CODE);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      // The modal is open, you can place any code to run when it opens here.
    }
  }, [isModalOpen]);

  const handleVerifyOneTimeCode = async () => {
    try {
      setIsVerifying(true);

      if (loading) {
        toast.error('Profile data is loading. Please wait.');
        return;
      }
      if (error) {
        toast.error('Error fetching profile data. Please try again.');
        return;
      }

      const userProfile = data.getProfile;
      const userProfileEmail = userProfile.user.email;

      const response = await verifyOneTimeCode({
        variables: { email: userProfileEmail, code },
      });

      console.log(response.data.verifyOneTimeCode);

      if (response.data.verifyOneTimeCode) {
        toast.success('OTP verified successfully');
        setIsCodeVerified(true);
        closeModal();
      }
    } catch (error) {
      console.error(error);
      toast.error('Error verifying OTP');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white p-4 rounded-lg shadow-md z-10">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter one-time code"
              className="border border-gray-300 p-2 w-full rounded text-black"
            />
            <button
              onClick={handleVerifyOneTimeCode}
              className="bg-blue-500 text-white p-2 rounded mt-4"
              disabled={isVerifying} // Disable the button while verifying
            >
              {isVerifying ? (
                <Loader1 /> // Show the loader inside the button
              ) : (
                'Verify Code'
              )}
            </button>
            {isCodeVerified && <div className="mt-4">OTP Verified Successfully!</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyOneTimeCodeComponent;
