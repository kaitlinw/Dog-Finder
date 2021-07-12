import * as mobilenet from '@tensorflow-models/mobilenet';

const getDogBreed = async ({
  identifiedBreed,
  uploadedImage,
  setIdentifiedBreed,
}: Props): JSX.Element => {


  const useEffect(async (): void => {
    // Load the model.
    const model = await mobilenet.load();

    // Classify the image.
    const predictions = await model.classify(uploadedImage);

    const identifiedBreedList = predictions[0].className;
    const selectedBreed = identifiedBreedList.split(', ')[0];

    setIdentifiedBreed(selectedBreed);
  }, [uploadedImage])

  return null;
};

export default getDogBreed;
