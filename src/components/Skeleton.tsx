import React from 'react';

export default function Skeleton() {
  return (
    <main className="page-main">
      <div className="border-2 p-2 md:p-4 min-h-screen min-w-full flex flex-col bg-white">
        <div className="flex flex-row justify-between">
          <div className="bg-gray-300 dark:bg-gray-600 h-12 animate-pulse rounded-md hidden md:block w-[50%] md:w-[10%] md:mr-2" />
          <div className="bg-gray-300 dark:bg-gray-600 h-12 animate-pulse rounded-md w-[50%] md:mx-2" />
          <div className="w-12 bg-gray-300 dark:bg-gray-600 animate-pulse h-12 rounded-full ml-auto mr-2 md:mx-2" />
          <div className="bg-gray-300 dark:bg-gray-600 h-12 animate-pulse rounded-md w-[10%]" />

          <div className="bg-gray-300 dark:bg-gray-600 h-12 animate-pulse hidden md:block rounded-md w-[20%] ml-2" />
        </div>
        <div className="flex grow my-3 h-full flex-row justify-center">
          <div className="flex flex-grow bg-gray-300 dark:bg-gray-600 rounded-xl animate-pulse md:mr-2" />
          <div className="md:flex flex-grow hidden bg-gray-300 dark:bg-gray-600 rounded-xl animate-pulse ml-2" />
        </div>
        <div className="h-[7vh] my-4 bg-gray-300 dark:bg-gray-600 animate-pulse w-[50%] rounded-md mx-auto" />
        <div className="mt-auto w-full animate-pulse  h-[8vh] flex justify-between">
          <div className="w-full md:w-[33%]  bg-gray-300 dark:bg-gray-600 rounded-md" />
          <div className="hidden md:flex w-[33%]  bg-gray-300 dark:bg-gray-600 rounded-md" />
          <div className="hidden md:flex w-[33%]  bg-gray-300 dark:bg-gray-600 rounded-md" />
        </div>
      </div>
    </main>
  );
}
