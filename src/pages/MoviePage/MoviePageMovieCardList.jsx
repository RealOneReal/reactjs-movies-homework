import { Grid } from "@mui/material";
import MovieCard from "../../components/MovieCard/MovieCard";
import DataFromTMDB from "../../mock-data/mockMovies";

const MoviesPageMovieCardList = () => {
  // todo: get recommendations from Redux ,it`s temporary implementation

  const results = DataFromTMDB?.results.slice(0, 5);
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

export default MoviesPageMovieCardList;
