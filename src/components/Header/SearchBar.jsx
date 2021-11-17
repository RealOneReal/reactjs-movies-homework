import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { inputSearch } from "../../redux/search/searchSlice";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.key === "Enter " && dispatch(inputSearch(value));
    dispatch(inputSearch(value));
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
