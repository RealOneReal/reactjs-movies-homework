import MovieCardList from "../../components/MovieCardList/MovieCardList";
import DataFromTMDB from "../../mock-data/mockMovies";

const MoviesRecommendations = () => {
  // todo: get recommendations from Redux ,it`s temporary implementation

  const results = DataFromTMDB?.results.slice(0, 5);
  return <MovieCardList {...{ results }} />;
};

export default MoviesRecommendations;
