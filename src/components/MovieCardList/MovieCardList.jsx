import { Grid } from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";

const MovieCardList = ({ results }) => {
  return (
    <Grid container spacing={1} justifyContent="center">
      {results.map((card) => (
        <Grid item key={card.id}>
          <MovieCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};
export default MovieCardList;
