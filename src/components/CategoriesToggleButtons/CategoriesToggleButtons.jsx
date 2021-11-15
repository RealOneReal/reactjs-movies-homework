import { useDispatch, useSelector } from "react-redux";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { moviesCategorie } from "../../redux/search/searchSlice";
import { fetchMoviesByCategory } from "../../redux/movies/moviesSlice";
import { useEffect } from "react";
import { API_MOVIES } from "../../api/moviesAPI";

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

  useEffect(() => {
    dispatch(fetchMoviesByCategory(categorie));
  }, [dispatch, categorie]);

  return (
    <ToggleButtonGroup
      value={categorie}
      color="primary"
      onChange={handleChangeCategorie}
      exclusive
      sx={styles.group}
    >
      <ToggleButton value={API_MOVIES.POPULAR} sx={styles.button}>
        Popular
      </ToggleButton>
      <ToggleButton value={API_MOVIES.TOP_RATED} sx={styles.button}>
        Top rated
      </ToggleButton>
      <ToggleButton value={API_MOVIES.UPCOMING} sx={styles.button}>
        Upcoming
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CategoriesToggleButtons;
