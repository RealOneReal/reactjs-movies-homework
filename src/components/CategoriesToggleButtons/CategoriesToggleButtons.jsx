import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const CategoriesToggleButtons = () => {
  const [categorie, setCategorie] = useState("popular");

  const handleChangeCategorie = ({ target }) => {
    setCategorie(target.value);
  };

  const styles = {
    group: {
      display: "flex",
      justifyContent: {
        md: "flex-end",
        xs: "center",
      },
      mr: 3,
    },
    button: {
      color: "secondary.light",
    },
  };

  return (
    <ToggleButtonGroup
      value={categorie}
      color="primary"
      onChange={handleChangeCategorie}
      exclusive
      sx={styles.group}
    >
      <ToggleButton value="popular" sx={styles.button}>
        Popular
      </ToggleButton>
      <ToggleButton value="top_rated" sx={styles.button}>
        Top rated
      </ToggleButton>
      <ToggleButton value="upcoming" sx={styles.button}>
        Upcoming
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CategoriesToggleButtons;
