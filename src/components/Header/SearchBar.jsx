import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { inputSearch } from "../../redux/search/searchSlice";
import { fetchMoviesBySearch } from "../../redux/movies/moviesSlice";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state) => state.movies);
  const { language } = useSelector((state) => state.search);

  const handleInput = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.key === "Enter " && dispatch(inputSearch(value));
    dispatch(inputSearch(value));
    dispatch(fetchMoviesBySearch({ value, pageNumber, language }));
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    dispatch(fetchMoviesBySearch({ value, pageNumber, language }));
  }, [language, pageNumber]);

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
