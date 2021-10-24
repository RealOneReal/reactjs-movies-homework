import { Grid } from "@mui/material";

const MovieCardList = (props) => {
  const { movieCards } = props;
  return (
    <Grid container>
      {movieCards.map((card) => (
        <Grid item xs={9} md={2} key={card.id}>
          {card}
        </Grid>
      ))}
    </Grid>
  );
};
export default MovieCardList;
