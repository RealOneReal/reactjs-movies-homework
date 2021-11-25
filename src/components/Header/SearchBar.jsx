import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { inputSearch } from "../../redux/search/searchSlice";
import {
  fetchMoviesBySearch,
  fetchGenresConfig,
} from "../../redux/movies/moviesThunks";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { language, value } = useSelector((state) => state.search);

  const handleInput = ({ target }) => {
    dispatch(inputSearch(target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.key === "Enter " && dispatch(inputSearch(value));
    dispatch(inputSearch(value));
    value && dispatch(fetchGenresConfig({ language }));
    value && dispatch(fetchMoviesBySearch({ value, pageNumber: 1, language }));
  };

  const styles = {
    formGroup: {
      width: { md: "400px", xs: "200px" },
      display: "flex",
      flexDirection: "row",
      columnGap: "8px",
    },
    textField: {
      width: {
        xs: "150px",
        md: "350px",
      },
      "& .MuiInputBase-input": {
        color: "primary.dark",
      },
    },
    iconButton: { width: "20px", color: "primary.dark" },
  };

  return (
    <Box sx={styles.formGroup} component="form" onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={handleInput}
        type="text"
        placeholder="Movies,person,movie theaters"
        variant="standard"
        sx={styles.textField}
      />
      <IconButton sx={styles.iconButton} type="submit">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
