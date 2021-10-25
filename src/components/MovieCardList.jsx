import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieCardList = (props) => {
  const { movieCards } = props;
  return (
    <Grid container>
      {movieCards.map((card) => (
        <Grid item xs={9} md={2} key={card.id}>
          <MovieCard props={card} />
        </Grid>
      ))}
    </Grid>
  );
};
export default MovieCardList;
