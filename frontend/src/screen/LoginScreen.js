import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";

// REDUX
import { userLogin } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./Custom Styles/loginSignupForm";

const LoginScreen = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");

  // REDUX
  const dispatch = useDispatch();

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(userLogin(email, password));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <img
            src="assets/images/login.png"
            className={classes.image}
            alt="login_image"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={18} className={classes.paper}>
            <img
              className={classes.avatar}
              src="assets/images/teamwork.png"
              alt="teamwork"
            />
            <h3 className={classes.heading}>LOGIN</h3>

            {/*// FORM FOR LOGIN //*/}

            <form className={classes.form}>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-email">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  placeholder="Email Address"
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  labelWidth={50}
                />
              </FormControl>

              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Password"
                  required
                  type={passwordVisibility ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {passwordVisibility ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={78}
                />
              </FormControl>

              {/*//////////////////////     VALIDATION ERROR MESSAGE     ////////////////////////*/}
              {/* {error && <Message varient="error">{error}</Message>} */}

              <Button
                className={classes.button}
                onClick={submitHandler}
                size="large"
                variant="contained"
                color="primary"
              >
                LOGIN
              </Button>

              <Grid container>
                <Grid item>
                  <Typography component="h5" className={classes.register_login}>
                    Haven't Registered yet? &nbsp;
                    <Link to="/register" variant="body2">
                      Register
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginScreen;
