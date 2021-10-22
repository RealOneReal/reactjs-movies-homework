import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import theme from "../theme/theme";
import { PlayCircle } from "@mui/icons-material";

const MovieCard = (props) => {
  const { poster_path, genre_ids, vote_average, original_title, id } = props;

  const genres = genre_ids?.length && genre_ids.join(" ");

  const handleClick = () => {
    console.log(id);
  };

  const styles = {
    card: {
      width: "200px",
      height: "300px",
      position: "relative",
      bgcolor: () => theme.palette.secondary.light,
      ":hover": {
        transition: "0.3s ease",
        opacity: 0.8,
      },
      ":hover .MuiAvatar-root": {
        display: "none",
      },
    },
    hoverLayer: {
      width: "inherit",
      height: "220px",
      position: "absolute",
      bgcolor: "black",
      opacity: 0,
      textAlign: "center",
      pt: "60%",
      cursor: "pointer",
      ":hover": {
        opacity: 1,
      },
    },
    playIcon: { color: "green", fontSize: "60px" },
    ratingBox: {
      position: "absolute",
      top: "20px",
      left: "5px",
      borderRadius: "5px",
      height: "20px",
    },
    cardImage: {
      width: "180px",
      ml: 1,
      objectFit: "fit",
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

      <Avatar variant="square" sx={styles.ratingBox}>
        <Typography>{vote_average}</Typography>
      </Avatar>
      <CardMedia
        component="img"
        height="220px"
        image={poster_path}
        sx={styles.cardImage}
      />
      <CardContent sx={{ p: 1 }}>
        <Typography variant="h6">{original_title}</Typography>
        <Typography variant="subtitle2" sx={styles.genres}>
          {genres}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
