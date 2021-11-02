import { Card, Typography, CardMedia, CardContent, Box } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import Fallback from "../../assets/broken-image.png";
import styles from "./styles";
import { truncateString } from "../../utils/stringUtils";

const MovieCard = ({
  poster_path,
  genre_ids,
  vote_average,
  original_title,
  id,
}) => {
  const title = truncateString(original_title, 19);
  const genres = truncateString(genre_ids?.length && genre_ids.join(" "), 26);

  const handleClick = () => {
    console.log(id);
  };

  const handleMediaFallback = (event) => {
    event.target.style.objectFit = "contain";
    return (event.target.src = Fallback);
  };

  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <Box className="rating" sx={styles.ratingBox}>
          <Typography variant="subtitle1" component="span">
            {vote_average}
          </Typography>
        </Box>
        <CardMedia
          component="img"
          height="220px"
          alt={title}
          src={poster_path}
          sx={styles.cardImage}
          onError={handleMediaFallback}
        />
        <CardContent sx={{ p: 1 }}>
          <Typography variant="h6" color="primary.light">
            {title}
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
      <Box sx={styles.hoverLayer} onClick={handleClick}>
        <PlayCircle sx={styles.playIcon} />
      </Box>
    </Box>
  );
};

export default MovieCard;
