import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

// components
import Loader from "../../components/Loader";
import Message from "../../components/Message";

//image
import postIllustration from "../../assets/images/postIllustration.png";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { postDetails } from "../../redux/actions/detailsAction";

import { useStyles } from "./customStyles/postDetails";

const PostDetails = ({ history }) => {
  const classes = useStyles();

  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [phn_no, setPhn_no] = useState("");
  const [dob, setDob] = useState(new Date("2000-01-01T21:11:00"));
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");
  const [content, setContent] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, details, error } = useSelector(
    (state) => state.userPostDetails
  );

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  });

  // submit handler
  const submitPostHandler = (event) => {
    event.preventDefault();
    dispatch(
      postDetails({
        bio: bio,
        address: address,
        phn_no: phn_no,
        dob: dob.toString().substring(0, 15),
        password: password,
      })
    );
  };

  // change dropdown menu for content
  const handleContentChange = (content) => {
    setContent(content);
    history.push(`/home/post/${content}`);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          {/* dropdown menu */}
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={content}
              displayEmpty
              onChange={(e) => handleContentChange(e.target.value)}
              className={classes.select}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">Details</MenuItem>
              <MenuItem value="documents">Documents</MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="career">Career</MenuItem>
              <MenuItem value="finance">Finance</MenuItem>
              <MenuItem value="medical">Medical</MenuItem>
            </Select>
          </FormControl>
          {/* image of postIllustration */}
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
                      <AssignmentIndIcon
                        color="primary"
                        className={classes.icon}
                      />
                    </InputAdornment>
                  }
                  labelWidth={38}
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
                      <HomeIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setAddress(e.target.value)}
                  labelWidth={82}
                />
              </FormControl>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-phn_no">
                  Phone
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-phn_no"
                  placeholder="Phone"
                  required
                  type="text"
                  value={phn_no}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setPhn_no(e.target.value)}
                  labelWidth={64}
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
                      <LockIcon color="primary" className={classes.icon} />
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
                  labelWidth={96}
                />
              </FormControl>
              <br />
              {/* show loading or error onSubmit */}
              {loading ? (
                <Loader />
              ) : error ? (
                <Message varient="error">{error}</Message>
              ) : (
                <Message varient="success">POST successfully submitted</Message>
              )}
              <br />
              <Button
                className={classes.button}
                onClick={submitPostHandler}
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
