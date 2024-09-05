/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Buttons';

export default function CommentCard({ comment }: any) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="font-serif bg-neutral-100  dark:bg-dark-frame-bg md:flex sm:hidden flex-col justify-start items-center ">
        <table className="lg:w-9/12 md:w-11/12 lg:h-[70%] md:h-[60%] md:ml-0 lg:ml-32 dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md mt-32 ">
          <tbody className=" text-center ">
            <tr className="text-light-text dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg ">
              <td className="lg:py-10 md:py-0 px-10 text-left  ">
                {t('Quantity')}
              </td>
              <td className="py-3 ">1</td>
              <td className="lg:py-6 md:py-3 text-start lg:text-sm">
                This is remarks on quantity perfomance of this trainee
              </td>

              <td className="py-3 px-8">
                <Button variant="primary" size="sm" style="px-4 py-0 text-sm">
                  {t('Reply')}
                </Button>
              </td>
            </tr>
            <tr className="text-black dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary ">
              <td className="py-10 px-10 text-left">{t('Quality')}</td>
              <td className="py-3 ">1</td>
              <td className="py-3  text-start text-sm">
                This is remarks on quality perfomance of this trainee
              </td>
              <td className="py-3 ">
                <Button variant="primary" size="sm" style="px-4 py-0 text-sm">
                  {t('Reply')}
                </Button>
              </td>
            </tr>
            <tr className="text-black dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg ">
              <td className="py-10 px-10 text-left">
                {t('Professional skills')}
              </td>
              <td className="py-3 ">1</td>
              <td className="py-3  text-start text-sm">
                This is remarks on Professional skills perfomance of this
                trainee
              </td>
              <td className="py-3">
                <Button variant="primary" size="sm" style="px-4 py-0 text-sm">
                  {t('Reply')}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
