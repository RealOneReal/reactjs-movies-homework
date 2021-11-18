import { Grid } from "@mui/material";
import MovieCard from "../../components/MovieCard/MovieCard";
import DataFromTMDB from "../../mock-data/mockMovies";

const MainPageMovieCardList = () => {
  // todo: add mockData from MovieDB
  const results = DataFromTMDB.results;

  return (
    <Grid container spacing={1} justifyContent="center">
      {results &&
        results.map((card) => (
          <Grid item key={card.id}>
            <MovieCard {...card} />
          </Grid>
        ))}
    </Grid>
  );
};
export default MainPageMovieCardList;
