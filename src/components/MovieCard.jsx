import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import { truncateString } from "../utils/stringUtils";

const MovieCard = (props) => {
  const { poster_path, genre_ids, vote_average, original_title, id } = props;
  const title = truncateString(original_title, 19);
  const genres = truncateString(genre_ids?.length && genre_ids.join(" "), 26);

  const handleClick = () => {
    console.log(id);
  };

  const styles = {
    card: {
      width: "200px",
      height: "300px",
      position: "relative",
      bgcolor: "secondary.dark",
      ":hover": {
        transition: "0.6s ease",
        opacity: 0.8,
      },
      ":hover .rating": {
        display: "none",
      },
    },
    hoverLayer: {
      width: "inherit",
      height: "220px",
      position: "absolute",
      bgcolor: "secondary.dark",
      opacity: 0,
      textAlign: "center",
      pt: "60%",
      cursor: "pointer",
      ":hover": {
        transition: " .3s ease",
        opacity: 1,
      },
    },
    playIcon: { color: "primary.light", fontSize: "60px" },
    ratingBox: {
      position: "absolute",
      top: "20px",
      left: "0px",
      borderRadius: "5px",
      height: "25px",
      width: "40px",
      bgcolor: "green",
      textAlign: "center",
    },
    cardImage: {
      width: "180px",
      ml: 1,
      mt: 1,
      borderRadius: "10px",
    },
    genres: { display: "flex", textAlign: "center", columnGap: 1 },
  };

  return (
    <Card sx={styles.card}>
      <Box sx={styles.hoverLayer} onClick={handleClick}>
        <PlayCircle sx={styles.playIcon} />
      </Box>

      <Box className="rating" sx={styles.ratingBox}>
        <Typography variant="subtitle1" component="span">
          {vote_average}
        </Typography>
      </Box>
      <CardMedia
        component="img"
        height="220px"
        image={poster_path}
        sx={styles.cardImage}
      />
      <CardContent sx={{ p: 1 }}>
        <Typography variant="h6" color="primary.light">
          {title}
        </Typography>
        <Typography variant="subtitle2" sx={styles.genres} color="primary.dark">
          {genres}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
