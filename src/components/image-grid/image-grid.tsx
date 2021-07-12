//  Takes image cards and displays them in a grid. Renders them on upload results.
import React, { FC } from 'react';
import LazyLoad from 'react-lazy-load';

import * as styles from './image-grid.css';
interface ImagesProps {
  dogImages: string[];
}

const ImageGrid: FC<ImagesProps> = ({
  dogImages,
}: ImagesProps): JSX.Element => {
  return (
    <div
      className="grid"
      data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 500 }'
    >
      {dogImages.map(
        (image, index): JSX.Element => (
          <LazyLoad className="grid-item" key={index} offsetVertical={300}>
            <img src={image} className="grid-item" />
          </LazyLoad>
        ),
      )}
    </div>
  );
};

export default ImageGrid;
