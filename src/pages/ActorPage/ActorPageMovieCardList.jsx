import { Grid } from "@mui/material";
import MovieCard from "../../components/MovieCard/MovieCard";
import { movies } from "../../mock-data/mockPersonDetails";

const ActorPageMovieCardList = () => {
  const results = movies;

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

export default ActorPageMovieCardList;
