// renders breed result, image preview, and results with the grid from image grid. includes infinite scroll logic.
import React, { FC } from 'react';

import ImageGrid from '../image-grid/image-grid'

interface Props {
  breed: String,
  images: Array(String)
};

const UploadResults: FC<Props> = ({
  breed,
  images
}: Props) => (
  <>
    <p>{breed}</p>
    <ImageGrid images={images} />
  </>
);

export default UploadResults;