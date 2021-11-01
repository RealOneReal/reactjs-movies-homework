import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("EN");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const styles = {
    menuItem: {
      color: "secondary.dark",
    },
    select: {
      color: "primary.dark",
      ".css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
        color: "primary.dark",
      },
    },
  };

  return (
    <FormControl>
      <Select
        value={language}
        onChange={handleChange}
        variant="standard"
        color="secondary"
        sx={styles.select}
      >
        <MenuItem value="EN" sx={styles.menuItem}>
          EN
        </MenuItem>
        <MenuItem value="RU" sx={styles.menuItem}>
          RU
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
