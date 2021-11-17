import { Pagination, PaginationItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { moviesSlice } from "../../redux/movies/moviesSlice";

const MoviesPagination = () => {
  const dispatch = useDispatch();
  const pageNumberActionCreator = moviesSlice.actions.pageNumber;
  const { totalPages, pageNumber } = useSelector((state) => state.movies);
  const handleClick = ({ target }) => {
    dispatch(pageNumberActionCreator(+target.textContent));
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
