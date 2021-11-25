import { Pagination, PaginationItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { moviesSlice } from "../../redux/movies/moviesSlice";
import {
  fetchMoviesByCategory,
  fetchMoviesBySearch,
} from "../../redux/movies/moviesThunks";

const MoviesPagination = () => {
  const dispatch = useDispatch();
  const pageNumberActionCreator = moviesSlice.actions.pageNumber;
  const { totalPages, pageNumber } = useSelector((state) => state.movies);
  const { value, language, category } = useSelector((state) => state.search);
  const handleClick = ({ target }) => {
    dispatch(pageNumberActionCreator(+target.textContent));
    value
      ? dispatch(
          fetchMoviesBySearch({
            value,
            language,
            pageNumber: +target.textContent,
          })
        )
      : dispatch(
          fetchMoviesByCategory({
            category,
            language,
            pageNumber: +target.textContent,
          })
        );
  };

  return (
    <Pagination
      count={totalPages}
      page={pageNumber}
      hideNextButton={true}
      hidePrevButton={true}
      color="primary"
      onClick={handleClick}
      renderItem={(item) => (
        <PaginationItem
          component="button"
          sx={{ color: "primary.dark" }}
          {...item}
        />
      )}
    />
  );
};

export default MoviesPagination;
