import { Grid } from "@mui/material";
import { images } from "../../mock-data/mockMovieDetail";

const PostersContainer = () => {
  const posters = images.posters?.filter((_img, index) => index < 8);

  return (
    <Grid container gap={1}>
      {posters.map((img) => (
        <Grid
          item
          sx={{
            backgroundImage: `url(${img.file_path})`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "210px",
            height: "120px",
          }}
        />
      ))}
    </Grid>
  );
};

export default PostersContainer;
