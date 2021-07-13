import React, { ChangeEvent, FC, useEffect, useState } from 'react';
// Import { Container } from './upload-component.style.ts'

interface Props {
  setUploadedImage: React.Dispatch<React.SetStateAction<string>>;
}

const UploadComponent: FC<Props> = ({
  setUploadedImage,
}: Props): JSX.Element => {
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (previewImage === '') {
      setPreviewImage(undefined);
    }
  });

  const handleUploadPreview = (event: ChangeEvent): void => {
    const reader = new FileReader();
    const file = event.target.files[0];
    const preview = document.querySelector('img');

    reader.addEventListener(
      'load',

      (): void => {
        preview.src = reader.result;
        setPreviewImage(preview.src);
        setUploadedImage(preview.src);
      },
      false,
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h3>Upload your favourite image of a dog to find out its breed.</h3>
      <input type="file" onChange={handleUploadPreview} />
      <img src={previewImage} width="400" />
    </div>
  );
};

export default UploadComponent;
