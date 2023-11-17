import { Avatar, InputAdornment, TextField } from "@mui/material";
import "./Navbar.css";
import logo from "./images/logo.png";

import { Search, ArrowDropDown, Notifications } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_left">
        <img src={logo} alt="assiduus logo" />
      </div>
      <div className="nav_right">
        <TextField
          size="small"
          autoComplete="off"
          sx={{
            borderRadius: "0.5rem",
            backgroundColor: "#f7f7f8",
            "& fieldset": { border: "none" }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
          variant="outlined"
        />
        <div className="notification-container">
          <Notifications className="notification" />
          <span className="badge"> </span>
        </div>

        <Avatar
          alt="Luca Dicaprio"
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
        />
        <ArrowDropDown />
      </div>
    </div>
  );
};

export default Navbar;
