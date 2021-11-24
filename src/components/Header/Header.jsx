import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import LanguageSwitcher from "./LanguageSwitcher";

const styles = {
  toolbar: { display: "flex", justifyContent: "space-evenly" },
  typography: { fontWeight: 600, color: "primary.dark" },
};

const title = "TITLE";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "secondary.main" }}>
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h4" component="h1" sx={styles.typography}>
          {title}
        </Typography>
        <SearchBar />
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
