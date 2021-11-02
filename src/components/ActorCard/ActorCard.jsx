import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { truncateString } from "../../utils/stringUtils";

const ActorCard = ({ id, profile_path, name, character }) => {
  const handleClick = () => {
    console.log(id);
  };

  const actorName = truncateString(name, 19);
  const characterName = truncateString(character, 19);

  const styles = {
    card: {
      width: "150px",
      height: "225px",
      cursor: "pointer",
      ":hover ": {
        transform: "translateY(-16px)",
        transition: ".3s ease",
      },
      bgcolor: "secondary.dark",
    },
    cardMedia: { height: "170px", borderRadius: "10px" },
  };

  return (
    <Card sx={styles.card} onClick={handleClick}>
      <CardMedia component="img" image={profile_path} sx={styles.cardMedia} />
      <CardContent sx={{ p: "4px" }}>
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
