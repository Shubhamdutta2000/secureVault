import React, { useState, useEffect } from "react";
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
import GroupIcon from "@material-ui/icons/Group";

import teamwork from "../assets/images/teamwork.png";
import signUpButton from "../assets/images/signup.png";

// REDUX
import { userRegister } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./Custom Styles/loginSignupForm";

const SignUpScreen = ({ history }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  // redirect to home page if logged in
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    history.push("/login");
    dispatch(userRegister(name, email, password));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <img src={signUpButton} className={classes.image} alt="login_image" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={18} className={classes.paper}>
            <img className={classes.avatar} src={teamwork} alt="teamwork" />
            <h3 className={classes.heading}>SIGNUP</h3>

            {/*// FORM FOR SIGNUP //*/}

            <form className={classes.form}>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-email">Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  placeholder="Name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <GroupIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  labelWidth={50}
                />
              </FormControl>

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

              {/* <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-confirmPassword">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirmPassword"
                  placeholder="Confirm Password"
                  required
                  type={passwordVisibility ? "text" : "confirmPassword"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                  labelWidth={148}
                />
              </FormControl> */}

              {/*//////////////////////     VALIDATION ERROR MESSAGE     ////////////////////////*/}
              {/* {error && <Message varient="error">{error}</Message>} */}

              <Button
                className={classes.button}
                onClick={submitHandler}
                size="large"
                variant="contained"
                color="primary"
              >
                SIGNUP
              </Button>

              <Grid container>
                <Grid item>
                  <Typography component="h5" className={classes.register_login}>
                    Already Registered? &nbsp;
                    <Link to="/" variant="body2">
                      Login
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

export default SignUpScreen;
