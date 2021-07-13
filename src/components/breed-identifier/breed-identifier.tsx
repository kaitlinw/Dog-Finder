import '../upload-component/upload-component';

import * as mobilenet from '@tensorflow-models/mobilenet';
import React, { FC } from 'react';

const BreedIdentifier: FC = ({
  identifiedBreed,
  uploadedImage,
  setIdentifiedBreed,
}: Props): null => {
  const loadPredictions = async (): Promise<unknown> => {
    const model = await mobilenet.load();

    const predictions = await model.classify(uploadedImage);
    const identifiedBreedList = predictions[0].className;
    const selectedBreed = identifiedBreedList.split(', ')[0];

    setIdentifiedBreed(selectedBreed);
  };

  // Loading state between image upload and model response
  if (!identifiedBreed && uploadedImage) {
    loadPredictions();

    return <h2>loading breed...</h2>;
  }

  return null;
};

export default BreedIdentifier;
