import { Grid } from "@mui/material";
import { photos } from "../../mock-data/mockPersonDetails";

const PhotosContainer = () => {
  return (
    <Grid container gap={2}>
      {photos.map((photo, index) => (
        <Grid
          item
          key={index}
          sx={{
            backgroundImage: `url(${photo.file_path})`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "150px",
            height: "225px",
          }}
        />
      ))}
    </Grid>
  );
};

export default PhotosContainer;
