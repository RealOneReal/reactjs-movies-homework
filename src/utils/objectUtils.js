import { API_MOVIES } from "../api/moviesAPI";

export const renameKeysOfFetchingMovies = (obj) => {
  return {
    ...obj.data,
    results: obj.data.results?.map((item) => {
      const path = item.poster_path
        ? `${API_MOVIES.BASE_URL_IMAGES}${item.poster_path}`
        : "null";
      return {
        genreIds: item.genre_ids,
        title: item.title,
        posterPath: path,
        voteAverage: item.vote_average,
        id: item.id,
      };
    }),
  };
};
