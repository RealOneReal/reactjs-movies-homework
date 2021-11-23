import { CircularProgress, Backdrop } from "@mui/material";
const Spinner = ({ status }) => {
  const isVisible = status === "loading" ? true : false;
  console.log(isVisible, "and status :", status);
  return (
    <Backdrop open={isVisible} sx={{ zIndex: "10" }}>
      <CircularProgress
        size={100}
        sx={{
          position: "absolute",
          top: "40vh",
          left: "calc(50vw - 50px)",
          zIndex: "100",
        }}
      />
    </Backdrop>
  );
};

export default Spinner;
