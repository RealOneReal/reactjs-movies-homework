import { Pagination, PaginationItem } from "@mui/material";

const MoviesPagination = (props) => {
  // todo: realize pagination after connecting Redux
  const { total_pages, page } = props;
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
