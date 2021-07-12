const getDogImages = async (breed: string): Promise<unknown> => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/3`,
  );
  const responseJson = response.json();

  return responseJson;
};

export default getDogImages;
