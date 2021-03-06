import { Box, Container } from "@mui/material";
import MainPageMovieCardList from "./MainPageMovieCardList";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import CategoriesToggleButtons from "../../components/CategoriesToggleButtons/CategoriesToggleButtons";
import DataFromTMDB from "../../mock-data/mockMovies";

const MainPage = () => {
  return (
    <Box sx={{ backgroundColor: "secondary.dark" }}>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <CategoriesToggleButtons />
        <MainPageMovieCardList />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: " 16px 0",
          }}
        >
          <MoviesPagination {...DataFromTMDB}></MoviesPagination>
        </Box>
      </Container>
    </Box>
  );
};
export default MainPage;
