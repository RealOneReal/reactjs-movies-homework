import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "./styles";
import { truncateString } from "../../utils/stringUtils";
import fallback from "../../assets/broken-image.png";

const ActorCard = ({ id, profilePath, name, character }) => {
  const actorName = truncateString(name, 19);
  const characterName = truncateString(character, 19);

  const handleClick = () => {
    console.log(id);
  };

  const handleMediaFallback = (event) => {
    event.target.style.objectFit = "contain";
    return (event.target.src = fallback);
  };

  return (
    <Card sx={styles.card} onClick={handleClick}>
      <CardMedia
        component="img"
        alt={actorName}
        src={profilePath}
        sx={styles.cardMedia}
        onError={handleMediaFallback}
      />
      <CardContent sx={styles.cardContent}>
        <Typography component="div" variant="subtitle1">
          {actorName}
        </Typography>
        <Typography component="div" variant="subtitle2">
          {characterName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
