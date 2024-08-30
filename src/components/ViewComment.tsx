/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useRef, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

interface CommentProps {
  remark: string;
}

function Comment({ remark }: CommentProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open state

  const closeModel = () => {
    if (dialog.current?.close) dialog.current.close();
    setIsModalOpen(false); // Close the modal and set isModalOpen to false
  };

  const openModel = () => {
    if (dialog.current?.showModal) dialog.current.showModal();
    setIsModalOpen(true); // Open the modal and set isModalOpen to true
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
      {isModalOpen && <div className="blur-background" />}
      <dialog
        ref={dialog}
        className={`rounded-lg shadow-lg w-[40%] ${
          isModalOpen ? 'modal-open' : ''
        }`}
        dat-testid="dialog"
        onClick={(e) => close(e)}
      >
        <div className="p-3 rounded trainee-model bg-indigo-100 w-[100%] h-[150px] font-serif">
          {remark ? (
            <div className="comment-content">
              <p className="font-bold my-2 text-lg">From Coordinator:</p>
              <div className="font-light font-9 text-">{remark}</div>
            </div>
          ) : (
            <p className="font-bold font-9 text-md m-16">
              No comments provided
            </p>
          )}
        </div>
      </dialog>
      <button
        className="bg-[#8667F2] flex px-4 py-1 flex-row justify-evenly items-center rounded-xl text-white"
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
