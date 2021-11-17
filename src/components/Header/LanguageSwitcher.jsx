import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { language } from "../../redux/search/searchSlice";

const LanguageSwitcher = () => {
  const [languageFromInput, setLanguage] = useState("EN");
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setLanguage(target.value);
    dispatch(language(target.value));
  };

  const styles = {
    menuItem: {
      color: "secondary.dark",
    },
    select: {
      color: "primary.dark",
      "& .MuiSvgIcon-root": {
        color: "primary.dark",
      },
    },
  };

  return (
    <FormControl>
      <Select
        value={languageFromInput}
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
