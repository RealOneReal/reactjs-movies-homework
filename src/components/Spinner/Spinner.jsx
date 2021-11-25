import { CircularProgress, Backdrop } from "@mui/material";
import { fetchStatus } from "../../redux/constants";

const Spinner = ({ status }) => {
  const isVisible = status === fetchStatus.loading ? true : false;
  const styles = {
    backdrop: { zIndex: "10" },
    spinner: {
      position: "absolute",
      top: "40vh",
      left: "calc(50vw - 50px)",
      zIndex: "100",
    },
  };

  return (
    <Backdrop open={isVisible} sx={styles.backdrop}>
      <CircularProgress size={100} sx={styles.spinner} />
    </Backdrop>
  );
};

export default Spinner;
