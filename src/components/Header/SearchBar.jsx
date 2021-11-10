import { TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleInput = ({ target }) => {
    setValue(target.value);
  };

  const styles = {
    textField: {
      width: {
        xs: "150px",
        md: "400px",
      },
      "& .MuiInputBase-input": {
        color: "primary.dark",
      },
    },
  };

  return (
    <TextField
      value={value}
      onChange={handleInput}
      type="text"
      placeholder="Movies,person,movie theaters"
      variant="standard"
      sx={styles.textField}
    />
  );
};

export default SearchBar;
