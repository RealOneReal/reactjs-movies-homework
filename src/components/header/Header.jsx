import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchBar from "./header/SearchBar";
import LanguageSwitcher from "./header/LanguageSwitcher";

const styles = {
  toolbar: { display: "flex", justifyContent: "space-evenly" },
  typography: { fontWeight: 600 },
};

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h4" component="span" sx={styles.typography}>
          TITLE
        </Typography>
        <SearchBar />
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
