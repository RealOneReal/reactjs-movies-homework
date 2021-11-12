import { useDispatch, useSelector } from "react-redux";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { moviesCategorie } from "../../redux/search/searchSlice";

const CategoriesToggleButtons = () => {
  const dispatch = useDispatch();
  const categorie = useSelector((state) => state.search.moviesCategorie);

  const handleChangeCategorie = ({ target }) => {
    dispatch(moviesCategorie(target.value));
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
