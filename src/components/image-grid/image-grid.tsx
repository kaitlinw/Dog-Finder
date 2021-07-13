//  Takes image cards and displays them in a grid. Renders them on upload results.
import React, { FC } from 'react';
import LazyLoad from 'react-lazy-load';

interface ImagesProps {
  dogImages: string[];
}

const ImageGrid: FC<ImagesProps> = ({
  dogImages,
}: ImagesProps): JSX.Element => {
  return (
    <>
      {dogImages.map(
        (image, index): JSX.Element => (
          <img key={index} width="500px" src={image} />
        ),
      )}
    </>
  );
};

export default ImageGrid;
