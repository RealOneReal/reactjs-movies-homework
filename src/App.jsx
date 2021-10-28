import Header from "./components/header/Header";
import MoviePage from "./pages/MoviePage";
import { movie } from "./mock-data/mockMovieDetail";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MoviePage {...movie} />
    </div>
  );
};

export default App;
