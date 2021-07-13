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
  const [apiStatus, setApiStatus] = useState('');

  useEffect(async (): void => {
    const transformedBreedName = identifiedBreed.toLowerCase();
    console.log(transformedBreedName);
    await getDogImages(transformedBreedName).then(response => {
      setApiStatus(response.status);
      setDogImages(response.message);
    });
  }, [identifiedBreed]);

  return (
    <>
      <h3>Your dog breed is...</h3>
      <h2>{identifiedBreed}</h2>
      {apiStatus === 'success' && <ImageGrid dogImages={dogImages} />}
      {apiStatus !== 'success' && (
        <h3>
          Something went wrong loading the image gallery. Try a different breed
          of dog...
        </h3>
      )}
    </>
  );
};

export default ResultsComponent;
