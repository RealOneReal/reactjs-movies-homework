import { useDispatch, useSelector } from "react-redux";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { fetchMoviesByCategory } from "../../redux/movies/moviesSlice";
import { useEffect, useState } from "react";
import { API_MOVIES } from "../../api/moviesAPI";

const CategoriesToggleButtons = () => {
  const [category, setCategory] = useState(API_MOVIES.POPULAR);
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.movies.pageNumber);
  const language = useSelector((state) => state.search.language);
  const inputValue = useSelector((state) => state.search.value);
  console.log(inputValue);
  const handleChangeCategorie = ({ target }) => {
    if (inputValue) {
      return;
    }
    setCategory(target.value);
    dispatch(
      fetchMoviesByCategory({ category: target.value, pageNumber, language })
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
    dispatch(fetchMoviesByCategory({ category, pageNumber, language }));
  }, [language, pageNumber]);

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
