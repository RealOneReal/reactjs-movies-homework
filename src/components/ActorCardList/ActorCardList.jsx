import { Grid } from "@mui/material";
import ActorCard from "../ActorCard";
const ActorCardList = ({ cast }) => {
  return (
    <Grid container spacing={1}>
      {cast.map((card) => (
        <Grid item key={card.id}>
          <ActorCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ActorCardList;
