import Header from "./components/Header/Header";
// import MainPage from "./pages/MainPage/MainPage";
// import ActorPage from "./pages/ActorPage/ActorPage";
import MoviePage from "./pages/MoviePage/MoviePage";
// import { person } from "./mock-data/mockPersonDetails";
import { movie } from "./mock-data/mockMovieDetail";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <MainPage></MainPage> */}
      {/* <ActorPage {...person}></ActorPage> */}
      <MoviePage {...movie}></MoviePage>
    </div>
  );
};

export default App;
