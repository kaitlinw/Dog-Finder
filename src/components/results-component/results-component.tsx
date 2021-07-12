import React, { FC, useEffect, useState } from 'react';

import getDogImages from '../../fetch-dog-images';
import ImageGrid from '../image-grid/image-grid';

interface Props {
  identifiedBreed: string;
}

const ResultsComponent: FC<Props> = ({
  identifiedBreed,
}: Props): JSX.Element => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(async (): void => {
    const transformedBreedName = identifiedBreed.toLowerCase();
    await getDogImages(transformedBreedName).then(imageUrl => {
      setDogImages(imageUrl.message);
    });
  }, [identifiedBreed]);

  return (
    <>
      <h3>Your dog breed is...</h3>
      <h2>{identifiedBreed}</h2>
      <p>See below for more images:</p>
      <ImageGrid dogImages={dogImages} />
    </>
  );
};

export default ResultsComponent;
