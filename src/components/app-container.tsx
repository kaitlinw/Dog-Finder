import React, { FC } from 'react';

import DogIdentifierComponent from './dog-identifier-component/dog-identifier-component';
import ResultsComponent from './results-component/results-component';
import UploadComponent from './upload-component/upload-component';

const AppContainer: FC = (): JSX.Element => {
  const [identifiedBreed, setIdentifiedBreed] = React.useState('');
  const [uploadedImage, setUploadedImage] = React.useState('');

  return (
    <>
      <h1>Welcome to dog finder</h1>
      <UploadComponent setUploadedImage={setUploadedImage} />
      <DogIdentifierComponent
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
