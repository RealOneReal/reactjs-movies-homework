import { Box, Container } from "@mui/material";
import MainPageMovieCardList from "./MainPageMovieCardList";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import CategoriesToggleButtons from "../../components/CategoriesToggleButtons/CategoriesToggleButtons";
import Spinner from "../../components/Spinner/Spinner";

const MainPage = () => {
  const { status } = useSelector((state) => state.movies);
  console.log("render");
  return (
    <Box
      sx={{
        backgroundColor: "secondary.dark",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <Spinner status={status} />
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
