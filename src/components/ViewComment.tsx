/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
// Comment.tsx
import React, { useRef } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

interface CommentProps {
  remark: string;
}

function Comment({ remark }: CommentProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  const closeModel = () => {
    if (dialog.current?.close) dialog.current.close();
  };

  const openModel = () => {
    if (dialog.current?.showModal) dialog.current.showModal();
  };

  const close = (e: React.MouseEvent<HTMLElement>) => {
    const dialogDimensions = dialog.current?.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions!.left ||
      e.clientX > dialogDimensions!.right ||
      e.clientY < dialogDimensions!.top ||
      e.clientY > dialogDimensions!.bottom
    ) {
      closeModel();
    }
  };

  return (
    <>
      <dialog
        ref={dialog}
        className="rounded-lg shadow-lg w-[40%]"
        dat-testid="dialog"
        onClick={(e) => close(e)}
      >
        <div className="p-3 rounded  trainee-model bg-[#f5f8ff] w-[100%] h-[156px]">
          <div>
            <p className="font-bold my-2 text-lg">From Coordinator</p>
            <div className="font-light font-9 text-md">{remark}</div>
          </div>
        </div>
      </dialog>
      <button
        className="bg-[#333131] flex px-4 py-1 flex-row justify-evenly items-center rounded-xl text-white"
        onClick={() => openModel()}
      >
        <AiOutlineEye className="m-1" />
        <div className="flex felx-col justify-center items-center">
          <span className="text-sm">view</span>
        </div>
      </button>
    </>
  );
}

export default Comment;
