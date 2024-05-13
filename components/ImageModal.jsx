'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const ImageModal = ({ imgSrc, imgTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter()
  const handleClickBackdrop = () => {
    setIsModalOpen(false);
    router.back()
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-85 flex justify-center items-center z-50`}
      onClick={handleClickBackdrop}
    >
      <dialog
        className={`bg-slate-900 bg-opacity-85 p-8 border-none rounded w-full max-w-3xl shadow-md`}
        open={isModalOpen}
      >
        <Image
          className={`my-12 mx-auto rounded-lg h-auto w-auto`}
          src={imgSrc}
          alt={imgTitle}
          width={400}
          height={200}
          priority
        />
      </dialog>
    </div>
  );
};
export default ImageModal;
