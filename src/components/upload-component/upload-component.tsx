import React, { FC } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const UploadComponent: FC = ({ setUploadedImage }: Props): JSX.Element => {
  const [image, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList: ImageListType): void => {
    setImages(imageList as never[]);
    setUploadedImage(document.querySelector('#uploaded-image'));
  };

  return (
    <>
      <h3>Upload your favourite image of a dog to find out its breed.</h3>
      <ImageUploading value={image} maxNumber={maxNumber} onChange={onChange}>
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }: Props): JSX.Element => (
          <div className="upload-image-wrapper">
            <button
              className="upload-img-btn"
              style={isDragging ? { color: 'blue' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            {imageList.map(
              (image, index): JSX.Element => (
                <div key={index} className="image-preview-item">
                  <img
                    src={image.dataURL}
                    id="uploaded-image"
                    alt=""
                    width="400"
                  />
                  <div className="image-item__btn-wrapper">
                    <button
                      onClick={() => {
                        onImageRemove(index);
                        location.reload();
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ),
            )}
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default UploadComponent;
