import { Pagination } from "@mui/material";

const MoviePagination = (props) => {
  // todo: realize pagination after connecting Redux
  const { count, page } = props;
  return (
    <Pagination
      count={count}
      page={page}
      hideNextButton={true}
      hidePrevButton={true}
    />
  );
};

export default MoviePagination;
