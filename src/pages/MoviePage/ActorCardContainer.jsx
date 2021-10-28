import { Box } from "@mui/system";
import ActorCardList from "../../components/ActorCardList/ActorCardList";
import { credits } from "../../mock-data/mockMovieDetail";

const ActorCardContainer = () => {
  const cast = credits.cast?.filter((_item, index) => index < 5);

  return (
    <Box sx={{ mt: 2 }}>
      <ActorCardList {...{ cast }} />
    </Box>
  );
};

export default ActorCardContainer;
