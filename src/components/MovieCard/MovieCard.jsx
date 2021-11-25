import { Card, Typography, CardMedia, CardContent, Box } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import fallback from "../../assets/broken-image.png";
import styles from "./styles";
import { truncateString } from "../../utils/stringUtils";

const MovieCard = ({ posterPath, genreIds, voteAverage, title, id }) => {
  const movieTitle = truncateString(title, 19);
  const genres = truncateString(genreIds.join(" "), 26);

  const handleClick = () => {
    console.log(id);
  };

  const handleMediaFallback = ({ target }) => {
    target.style.objectFit = "contain";
    return (target.src = fallback);
  };

  return (
    <Box sx={styles.container} onClick={handleClick}>
      <Card sx={styles.card}>
        <Box className="rating" sx={styles.ratingBox}>
          <Typography variant="subtitle1" component="span">
            {voteAverage}
          </Typography>
        </Box>
        <CardMedia
          component="img"
          alt={movieTitle}
          src={posterPath}
          sx={styles.cardImage}
          onError={handleMediaFallback}
        />
        <CardContent sx={{ p: 1 }}>
          <Typography variant="h6" color="primary.light">
            {movieTitle}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={styles.genres}
            color="primary.dark"
          >
            {genres}
          </Typography>
        </CardContent>
      </Card>
      <Box sx={styles.hoverLayer}>
        <PlayCircle sx={styles.playIcon} />
      </Box>
    </Box>
  );
};

export default MovieCard;
