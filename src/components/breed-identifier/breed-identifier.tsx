import '../upload-component/upload-component';

import * as mobilenet from '@tensorflow-models/mobilenet';
import React, { FC } from 'react';

interface Props {
  identifiedBreed: string;
  setIdentifiedBreed: React.Dispatch<React.SetStateAction<string>>;
  uploadedImage: string;
}

const BreedIdentifier: FC<Props> = ({
  identifiedBreed,
  uploadedImage,
  setIdentifiedBreed,
}: Props): void => {
  const loadPredictions = async (): Promise<unknown> => {
    const model = await mobilenet.load();

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

export default BreedIdentifier;
