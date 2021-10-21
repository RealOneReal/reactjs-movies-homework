import { TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const styles = {
    textField: {
      width: "400px",
    },
  };

  return (
    <TextField
      value={value}
      onChange={handleInput}
      type="search"
      placeholder="Movies,person,movie theaters"
      variant="standard"
      sx={styles.textField}
    />
  );
};

export default SearchBar;
