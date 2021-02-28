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
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

//image
import postIllustration from "../assets/images/postIllustration.png";

// REDUX
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./Custom Styles/postDetails";

const PostDetails = ({ history }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [dob, setDob] = useState(new Date("1900-01-01T21:11:00"));
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  });

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <img
            className={classes.postImage}
            src={postIllustration}
            alt="post_image"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={18} className={classes.paper}>
            {/*// FORM FOR DETAILS POST //*/}
            <form className={classes.form}>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  placeholder="Name"
                  required
                  type="text"
                  value={name}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setName(e.target.value)}
                  labelWidth={65}
                />
              </FormControl>

              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-bio">Bio</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-bio"
                  placeholder="Bio"
                  required
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  multiline
                  rows={1}
                  inputProps={{
                    style: { paddingTop: "1rem" },
                  }} // font size of input text
                  startAdornment={
                    <InputAdornment position="start">
                      <AssignmentIndIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  labelWidth={40}
                />
              </FormControl>

              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-address">
                  Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-address"
                  placeholder="Address"
                  required
                  type="text"
                  value={address}
                  startAdornment={
                    <InputAdornment position="start">
                      <HomeIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setAddress(e.target.value)}
                  labelWidth={98}
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
                <InputLabel htmlFor="outlined-adornment-phn">Phone</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-phn"
                  placeholder="Phone"
                  required
                  type="text"
                  value={phn}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setPhn(e.target.value)}
                  labelWidth={78}
                />
              </FormControl>

              <FormControl
                variant="outlined"
                style={{ marginTop: "-1rem" }}
                className={classes.input}
              >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM-dd-yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date Of Birth"
                    value={dob}
                    inputProps={{
                      style: { paddingTop: "0.4rem" },
                    }} // font size of input text
                    onChange={(e) => setDob(e)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
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
                POST
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostDetails;
