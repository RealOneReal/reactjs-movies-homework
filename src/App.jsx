import Header from "./components/Header/Header";
// import MainPage from "./pages/MainPage/MainPage";
// import ActorPage from "./pages/ActorPage/ActorPage";
import MoviePage from "./pages/MoviePage/MoviePage";
// import { person } from "./mock-data/mockPersonDetails";
import { movie } from "./mock-data/mockMovieDetail";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        {/* <MainPage></MainPage> */}
        {/* <ActorPage {...person}></ActorPage> */}
        <MoviePage {...movie}></MoviePage>
      </ErrorBoundary>
    </div>
  );
};

export default App;
