'use client';
import { useRef } from 'react';
import classes from './ImagePicker.module.css';

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
  const handlePickImg = () => {
    imageInput.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          onClick={handlePickImg}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
