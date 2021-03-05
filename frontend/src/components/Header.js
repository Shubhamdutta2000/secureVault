import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
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
          <Link className={classes.secretVault} to="/">
            <Typography variant="h6" className={classes.title}>
              SecretVault
            </Typography>
          </Link>

          <div className={classes.rightSide}>
            <Link to="/home/post/details">
              <Button className={classes.button}>
                <img
                  src={postButton}
                  className={classes.postIllustration}
                  alt="post button"
                />
                POST
              </Button>
            </Link>
            <Button
              className={classes.button}
              onClick={logoutHandler}
              color="inherit"
            >
              <ExitToAppIcon fontSize="large" />
              LOGOUT
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
