import { Pagination, PaginationItem } from "@mui/material";

const MoviesPagination = ({ total_pages, page }) => {
  // todo: realize pagination after connecting Redux
  return (
    <Pagination
      count={total_pages}
      page={page}
      hideNextButton={true}
      hidePrevButton={true}
      color="primary"
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
