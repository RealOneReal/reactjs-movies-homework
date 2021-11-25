import { Grid, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import Spinner from "../../components/Spinner/Spinner";

const MainPageMovieCardList = () => {
  const { movies, status } = useSelector((state) => state.movies);

  return (
    <>
      <Spinner status={status} />
      <Grid container spacing={1} justifyContent="center">
        {movies.length ? (
          movies.map((card) => (
            <Grid item key={card.id}>
              <MovieCard {...card} />
            </Grid>
          ))
        ) : (
          <Box sx={{ textAlign: "center", mt: 10 }}>
            <Typography variant="h3">Nothing not found</Typography>
          </Box>
        )}
      </Grid>
    </>
  );
};
export default MainPageMovieCardList;
