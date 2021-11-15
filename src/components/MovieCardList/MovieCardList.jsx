import { Grid } from "@mui/material";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieCardList = React.memo(({ movies }) => {
  return (
    <Grid container spacing={1} justifyContent="center">
      {movies &&
        movies.map((card) => (
          <Grid item key={card.id}>
            <MovieCard {...card} />
          </Grid>
        ))}
    </Grid>
  );
});
export default MovieCardList;
