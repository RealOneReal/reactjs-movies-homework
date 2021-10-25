import MovieCardList from "../../../components/MovieCardList";

const MainPageContainer = () => {
  // todo: add mockData from MovieDB
  const data = [];
  return <MovieCardList props={data} />;
};
export default MainPageContainer;
