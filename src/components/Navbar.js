import React from "react";
import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Menu,
  MenuItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import faq from "../pages/faq";

const useStyles = makeStyles({
  navbarStyles: {
    fontFamily: "Arial, san-serif",
    marginBottom: "5rem",
  },
});

const Navbar = () => {
  const classes = useStyles();
  // Menu Actions
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      style={{ fontFamily: "Arial, san-serif", marginBottom: "5rem" }}
      position="static"
    >
      <Toolbar>
        <Grid container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10} container>
            <Typography style={{ color: "#fff", flexGrow: 1 }}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon style={{ color: "#fff" }} />
            </Button>
              <Link href="/">
                <a style={{color: '#fff', textDecoration: 'none'}}> Car Trader</a>
              </Link>
            </Typography>
      
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <MenuItem>
              <Link href="/faq">
                <a style={{color: '#fff', textDecoration: 'none'}}>FAQ</a>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
