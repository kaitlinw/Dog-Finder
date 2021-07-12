const getDogImages = async (breed: string): Promise<unknown> => {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);

  if (response.ok) {
    return response.json();
  }
};

export default getDogImages;
