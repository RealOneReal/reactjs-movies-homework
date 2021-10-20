import { TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleInput}
      type="search"
      placeholder="Movies,person,movie theaters"
      variant="standard"
      sx={{
        width: "400px",
      }}
    />
  );
};

export default SearchBar;
