/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CommentCard({ comment }: any) {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-sm md:text-base dark:bg-dark-bg w-full border rounded-md border-gray-300 dark:border-white my-5">
      <div className="flex flex-col md:flex-row  p-5 w-full">
        <div className="w-1/6 md:w-2/6 lg:w-1/6 m-2 md:mr-2">
          <img
            className="w-10 h-10 md:w-14 md:h-14 rounded-full"
            src={comment.profile}
            alt="Profile"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="mr-2">{comment.name}</div>
            <div className="text-gray-400">{comment.createdAt}</div>
          </div>
          <div className="my-2">
            <p className="text-sm">{comment.comment}</p>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row">
              <img
                className="relative rounded-full w-7 h-7"
                src={comment.replies[0].profile}
                alt="Comment profile"
              />
              <img
                className="absolute ml-4 rounded-full w-7 h-7"
                src={comment.replies[1].profile}
                alt="Comment profile"
              />
            </div>
            <div className="ml-6 text-primary cursor-pointer">
              <h3>
                {comment.replies.length} {t('Replies')}
              </h3>
            </div>
            <div className="ml-2 text-gray-400">
              <h3>Last reply {comment.replies[0].createdAt}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
