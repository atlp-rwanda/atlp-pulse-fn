import React from 'react';

export default function Notify() {
  return (
    <div className=" dark:bg-dark-frame-bg flex flex-col py-8 px-5  items-center justify-evenly md:justify-evenly grow h-full w-full">
      <h1 className="flex font-semibold text-primary dark:text-dark-text-fill text-3xl">
        Hello
        <span className="animate-[wave_5s_ease-in-out_2]">👋🏻</span>, User
      </h1>
      <p className="text-center text-gray-400 text-sm">
        You are currently logged in, please logout to switch to another account!
      </p>
    </div>
  );
}
