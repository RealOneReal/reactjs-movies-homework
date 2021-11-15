import { Pagination, PaginationItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { pageNumber } from "../../redux/search/searchSlice";

const MoviesPagination = ({ totalPages, page }) => {
  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    dispatch(pageNumber(+target.textContent));
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
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
