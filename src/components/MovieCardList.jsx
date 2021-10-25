import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieCardList = (props) => {
  const { results } = props;
  return (
    <Grid container>
      {results.map((card) => (
        <Grid item xs={9} md={2} key={card.id}>
          <MovieCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};
export default MovieCardList;
