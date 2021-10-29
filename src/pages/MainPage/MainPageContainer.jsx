import MovieCardList from "../../components/MovieCardList";
import DataFromTMDB from "../../mock-data/mockMovies";
const MainPageContainer = () => {
  // todo: add mockData from MovieDB
  return <MovieCardList {...DataFromTMDB} />;
};
export default MainPageContainer;
