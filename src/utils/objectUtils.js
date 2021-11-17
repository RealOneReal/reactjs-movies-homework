export const renameKeysOfFetchingMovies = (obj) => {
  return {
    ...obj.data,
    results: obj.data.results?.map((item) => {
      return {
        genreIds: item.genre_ids,
        originalTitle: item.original_title,
        posterPath: item.poster_path,
        voteAverage: item.vote_average,
        id: item.id,
      };
    }),
  };
};
