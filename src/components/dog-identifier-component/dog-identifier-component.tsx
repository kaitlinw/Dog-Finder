import '../upload-component/upload-component';

import * as mobilenet from '@tensorflow-models/mobilenet';
import React, { FC } from 'react';

const DogIdentifierComponent: FC<Props> = ({
  identifiedBreed,
  uploadedImage,
  setIdentifiedBreed,
}: Props): JSX.Element => {
  const loadPredictions = async (): void => {
    // Load the model.
    const model = await mobilenet.load();

    // Classify the image.
    const predictions = await model.classify(uploadedImage);

    const identifiedBreedList = predictions[0].className;
    const selectedBreed = identifiedBreedList.split(', ')[0];

    setIdentifiedBreed(selectedBreed);
  };

  if (!identifiedBreed && uploadedImage) {
    loadPredictions();

    return 'loading breed...';
  }

  return null;
};

export default DogIdentifierComponent;
