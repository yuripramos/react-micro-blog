export const findById = (arr, id) => arr.find(c => c.id === id);

export const findByName = (arr, name) => arr.find(c => c.name === name);

export const filterArtistByName = (artist, articles, name) => {
  return articles.filter(
    k => k.metadata.authorId === findByName(artist, name).id
  );
};
