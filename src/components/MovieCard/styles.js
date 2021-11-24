const styles = {
  container: {
    position: "relative",
    ":hover .MuiPaper-root": {
      transition: "0.6s ease",
      opacity: 0.3,
    },
  },
  card: {
    width: "200px",
    height: "300px",
    position: "relative",
    bgcolor: "secondary.dark",
  },
  hoverLayer: {
    width: "200px",
    height: "300px",
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0,
    textAlign: "center",
    cursor: "pointer",
    ":hover": {
      transition: " .3s ease",
      opacity: 1,
    },
  },
  playIcon: {
    color: "primary.main",
    fontSize: "60px",
    position: "absolute",
    top: "calc(50% - 30px)",
    left: "calc(50% - 30px)",
  },
  ratingBox: {
    position: "absolute",
    top: "20px",
    left: "0px",
    borderRadius: "5px",
    height: "25px",
    width: "40px",
    bgcolor: "green",
    textAlign: "center",
  },
  cardImage: {
    width: "180px",
    height: "220px",
    ml: 1,
    mt: 1,
    borderRadius: "10px",
  },
  genres: { display: "flex", textAlign: "center", columnGap: 1 },
};

export default styles;
