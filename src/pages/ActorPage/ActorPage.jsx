import { Box, Container, Typography } from "@mui/material";
import PhotosContainer from "./PhotosContainer";
import PlayInMovies from "./PlayInMovies";

const ActorPage = ({
  profile_path,
  name,
  birthday,
  place_of_birth,
  biography,
}) => {
  const styles = {
    main_section: {
      display: "flex",
      gap: 4,
      flexDirection: {
        xs: "column",
        sm: "row",
      },
    },
    actor_photo: {
      backgroundImage: `url(${profile_path})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "250px",
      height: "375px",
      objectFit: "contain",
      borderRadius: "10px",
      position: "relative",
      margin: "auto",
    },
  };

  return (
    <Box sx={{ backgroundColor: "secondary.dark" }}>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Box className="main-section" sx={styles.main_section}>
          <Box className="main-section_actor">
            <Box sx={styles.actor_photo}></Box>
          </Box>
          <Box className="main-section_actor-items">
            <Typography variant="h3">{name}</Typography>
            <Typography variant="subtitle2">Birthday:</Typography>
            <Typography variant="body1">{birthday}</Typography>
            <Typography variant="subtitle2">Place of birth:</Typography>
            <Typography variant="body1">{place_of_birth}</Typography>
            <Typography variant="subtitle2">Biography:</Typography>
            <Typography variant="body1">{biography}</Typography>
            <Typography variant="h6">Photos:</Typography>
            <PhotosContainer />
          </Box>
        </Box>
        <Box className="known-by">
          <Typography variant="h5"> KNOWN BY:</Typography>
          <PlayInMovies></PlayInMovies>
        </Box>
      </Container>
    </Box>
  );
};

export default ActorPage;
