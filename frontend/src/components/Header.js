import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import postButton from "../assets/images/postButton.png";
// REDUX
import { userLogout } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./customStyles/header";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

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
            <Grid container alignItems="center">
              <Grid item md={4}>
                <Typography component="p">Hello,</Typography>
                <Typography
                  className={classes.userName}
                  component="h6"
                  variant="h6"
                >
                  {userInfo.name.split(" ")[0]}
                </Typography>
              </Grid>
              <Grid item md={4}>
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
              </Grid>
              <Grid item md={4}>
                <Button
                  className={classes.button}
                  onClick={logoutHandler}
                  color="inherit"
                >
                  <ExitToAppIcon fontSize="large" />
                  LOGOUT
                </Button>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
