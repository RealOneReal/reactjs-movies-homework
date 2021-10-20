import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("EN");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl>
      <Select value={language} onChange={handleChange} variant="standard">
        <MenuItem value="EN">EN</MenuItem>
        <MenuItem value="RU">RU</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
