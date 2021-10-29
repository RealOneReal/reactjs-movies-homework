import MovieCardList from "../../components/MovieCardList";
import { movies } from "../../mock-data/mockPersonDetails";

const PlayInMovies = () => {
  const results = movies;
  return <MovieCardList {...{ results }}></MovieCardList>;
};

export default PlayInMovies;