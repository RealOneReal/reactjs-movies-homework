import MovieCardList from "../../components/MovieCardList/MovieCardList";
import DataFromTMDB from "../../mock-data/mockMovies";

const MoviesRecommendations = () => {
  // todo: get recommendations from Redux ,it`s temporary implementation
  const results = DataFromTMDB.results.filter((movie, index) => {
    return index < 5 && movie;
  });

  return <MovieCardList {...{ results }} />;
};

export default MoviesRecommendations;
