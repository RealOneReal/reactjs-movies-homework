import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import {
  fetchGenresConfig,
  fetchMoviesByCategory,
} from "../../redux/movies/moviesThunks";
import { categoryChange } from "../../redux/search/searchSlice";
import { API_MOVIES } from "../../api/moviesAPI";

const CategoriesToggleButtons = () => {
  const dispatch = useDispatch();

  const { category } = useSelector((state) => state.search);
  const language = useSelector((state) => state.search.language);
  const inputValue = useSelector((state) => state.search.value);
  const handleChangeCategorie = ({ target }) => {
    if (inputValue) {
      return;
    }
    dispatch(categoryChange(target.value));
    dispatch(
      fetchMoviesByCategory({ category: target.value, pageNumber: 1, language })
    );
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
    if (inputValue) {
      return;
    }
    dispatch(fetchGenresConfig({ language }));
    dispatch(fetchMoviesByCategory({ category, pageNumber: 1, language }));
  }, [language]);

  return (
    <ToggleButtonGroup
      value={category}
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
