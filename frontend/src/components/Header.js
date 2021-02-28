import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import postButton from "../assets/images/postButton.png";
// REDUX
import { userLogout } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";

import { useStyles } from "./customStyles/header";
import { Link } from "react-router-dom";
const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // handling logout
  const logoutHandler = () => {
    dispatch(userLogout());
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            SecretVault
          </Typography>
          <img
            src={postButton}
            className={classes.postIllustration}
            alt="post button"
          />
          <Link to="/home/post/details">
            <Button className={classes.button}>POST</Button>
          </Link>
          <ExitToAppIcon fontSize="large" />
          <Button
            className={classes.button}
            onClick={logoutHandler}
            color="inherit"
          >
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
