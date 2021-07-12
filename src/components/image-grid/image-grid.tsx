//  Takes image cards and displays them in a grid. Renders them on upload results.
import React, { FC } from 'react';

interface Props {
  images: [];
}

const ImageGrid: FC<Props> = ({ images }: Props): JSX.Element => {
  return (
    <>
      <div>
        {images.map(
          (image, index): JSX.Element => (
            <img key={index} src={image} width="400px" />
          ),
        )}
      </div>
    </>
  );
};

export default ImageGrid;
