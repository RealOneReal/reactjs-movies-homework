import { Pagination } from "@mui/material";

const MoviesPagination = (props) => {
  // todo: realize pagination after connecting Redux
  const { total_pages, page } = props;
  return (
    <Pagination
      count={total_pages}
      page={page}
      hideNextButton={true}
      hidePrevButton={true}
    />
  );
};

export default MoviesPagination;
