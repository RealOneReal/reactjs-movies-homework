import { Box, Container, Typography } from "@mui/material";
import MoviesRecommendations from "./MoviesRecommendations";
import PostersContainer from "./PostersContainer";
import ActorCardContainer from "./ActorCardContainer";
const MoviePage = ({
  poster_path,
  vote_average,
  title,
  overview,
  release_date,
  revenue,
  runtime,
  genres,
}) => {
  const duration = `${Math.floor(runtime / 60)}:${runtime % 60}`;
  const movieGenres = genres?.map((item) => `${item.name} `);

  return (
    <Box sx={{ backgroundColor: "secondary.dark" }}>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Box
          className="main-section"
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box className="main-section_movie">
            <Box
              sx={{
                backgroundImage: `url(${poster_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "250px",
                height: "375px",
                objectFit: "contain",
                borderRadius: "10px",
                position: "relative",
                margin: "auto",
              }}
            >
              <Typography
                component="div"
                variant="h6"
                sx={{
                  backgroundColor: "green",
                  color: "primary.light",
                  width: "50px",
                  height: "30px",
                  textAlign: "center",
                  position: "absolute",
                  left: "-10px",
                  top: "20px",
                  borderRadius: "5px",
                }}
              >
                {vote_average}
              </Typography>
            </Box>
          </Box>
          <Box className="main-section_movie-items">
            <Typography variant="subtitle2">Title:</Typography>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle2">Overview:</Typography>
            <Typography variant="body1">{overview}</Typography>
            <Typography variant="subtitle2">Release date:</Typography>
            <Typography variant="body1">{release_date}</Typography>
            <Typography variant="subtitle2">Revenue:</Typography>
            <Typography variant="body1">{`$ ${revenue}`}</Typography>
            <Typography variant="subtitle2">Duration:</Typography>
            <Typography variant="body1">{duration}</Typography>
            <Typography variant="subtitle2">Genres:</Typography>
            <Typography variant="body1">{movieGenres}</Typography>
            <Typography variant="h6">Top Billed Cast:</Typography>
            <ActorCardContainer />
            <Typography variant="h6">Images:</Typography>
            <PostersContainer />
          </Box>
        </Box>
        <Box className="recommendations">
          <Typography variant="h5" color="primary.dark">
            RECOMMENDATIONS :
          </Typography>
          <MoviesRecommendations></MoviesRecommendations>
        </Box>
      </Container>
    </Box>
  );
};

export default MoviePage;