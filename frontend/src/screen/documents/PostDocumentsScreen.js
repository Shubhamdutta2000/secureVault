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
import MenuItem from "@material-ui/core/MenuItem";

import IconButton from "@material-ui/core/IconButton";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import Select from "@material-ui/core/Select";

// components
import Loader from "../../components/Loader";
import Message from "../../components/Message";

//image
import postIllustration from "../../assets/images/postIllustration.png";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { postDocuments } from "../../redux/actions/documentsAction";

import { useStyles } from "./customStyles/postDocuments";

const PostDocuments = ({ history }) => {
  const classes = useStyles();

  const [adhaarCard, setAdhaarCard] = useState("");
  const [driverLicense, setDriverLicense] = useState("");
  const [panCard, setPanCard] = useState("");
  const [voterCard, setVoterCard] = useState("");
  const [passport, setPassport] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");
  const [content, setContent] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, documents, error } = useSelector(
    (state) => state.userPostDocuments
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
      postDocuments({
        adhaar_card: adhaarCard,
        driver_license: driverLicense,
        panCard: panCard,
        voter_card: voterCard,
        passport: passport,
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
              <MenuItem value="details">Details</MenuItem>
              <MenuItem value="">Documents</MenuItem>
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
            {/*// FORM FOR DOCUMENTS POST //*/}
            <form className={classes.form}>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-bio">
                  Adhaar Card
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-adhaarCard"
                  placeholder="Adhaar Card"
                  required
                  value={adhaarCard}
                  onChange={(e) => setAdhaarCard(e.target.value)}
                  inputProps={{
                    style: { paddingTop: "1rem" },
                  }} // font size of input text
                  startAdornment={
                    <InputAdornment position="start">
                      <AssignmentIndIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  labelWidth={100}
                />
              </FormControl>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-driverLicense">
                  Driver License
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-driverLicense"
                  placeholder="Driver License"
                  required
                  type="text"
                  value={driverLicense}
                  startAdornment={
                    <InputAdornment position="start">
                      <DriveEtaIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setDriverLicense(e.target.value)}
                  labelWidth={116}
                />
              </FormControl>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-panCard">
                  Pan Card
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-panCard"
                  placeholder="Pan Card"
                  required
                  type="text"
                  value={panCard}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <AssignmentIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setPanCard(e.target.value)}
                  labelWidth={76}
                />
              </FormControl>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-voterCard">
                  Voter Card
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-voterCard"
                  placeholder="Voter Card"
                  required
                  type="text"
                  value={voterCard}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <HowToVoteIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setVoterCard(e.target.value)}
                  labelWidth={84}
                />
              </FormControl>

              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-passport">
                  Passport
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-passport"
                  placeholder="Passport"
                  required
                  type="text"
                  value={passport}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <FlightTakeoffIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setPassport(e.target.value)}
                  labelWidth={74}
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

export default PostDocuments;
