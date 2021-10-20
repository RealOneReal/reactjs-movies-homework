import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchBar from "./header/SearchBar";
import LanguageSwitcher from "./header/LanguageSwitcher";

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Typography variant="h4" component="span" sx={{ fontWeight: 600 }}>
          TITLE
        </Typography>
        <SearchBar />
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
