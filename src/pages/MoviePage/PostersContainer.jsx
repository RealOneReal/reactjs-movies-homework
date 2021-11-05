import { Grid } from "@mui/material";
import { images } from "../../mock-data/mockMovieDetail";

const PostersContainer = () => {
  const posters = images.posters?.slice(0, 8);

  return (
    <Grid container gap={1}>
      {posters.map((img, index) => (
        <Grid
          item
          key={index}
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
