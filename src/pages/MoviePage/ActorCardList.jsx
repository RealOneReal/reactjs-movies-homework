import { Grid } from "@mui/material";
import ActorCard from "../../components/ActorCard/ActorCard";
import { credits } from "../../mock-data/mockMovieDetail";

const ActorCardList = () => {
  const cast = credits.cast?.slice(0, 5);

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {cast &&
        cast.map((card) => (
          <Grid item key={card.id}>
            <ActorCard {...card} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ActorCardList;
