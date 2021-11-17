import { Box, Container } from "@mui/material";
import MainPageMovieCardList from "./MainPageMovieCardList";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import CategoriesToggleButtons from "../../components/CategoriesToggleButtons/CategoriesToggleButtons";

const MainPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.dark",
        minHeight: "calc(100vh - 80px)",
      }}
    >
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
          <MoviesPagination />
        </Box>
      </Container>
    </Box>
  );
};
export default MainPage;
