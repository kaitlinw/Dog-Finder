import React, { FC, useState } from 'react';

import BreedIdentifier from './breed-identifier/breed-identifier';
import ResultsComponent from './results-component/results-component';
import UploadComponent from './upload-component/upload-component';

const AppContainer: FC = (): JSX.Element => {
  const [identifiedBreed, setIdentifiedBreed] = useState('');
  const [uploadedImage, setUploadedImage] = useState('');

  return (
    <>
      <h1>Welcome to dog finder</h1>
      <UploadComponent setUploadedImage={setUploadedImage} />
      <BreedIdentifier
        identifiedBreed={identifiedBreed}
        uploadedImage={uploadedImage}
        setIdentifiedBreed={setIdentifiedBreed}
      />
      {identifiedBreed && (
        <ResultsComponent identifiedBreed={identifiedBreed} />
      )}
    </>
  );
};

export default AppContainer;
