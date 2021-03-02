import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getDetails, updateDetails } from "../redux/actions/detailsAction";

import { useStyles } from "./Custom Styles/contentForm";
import Loader from "../components/Loader";
import Message from "../components/Message";

const DocumentsScreen = ({ history, location }) => {
  const classes = useStyles();

  const [addhaarCard, setAddhaarCard] = useState("");
  const [driverLicense, setDriverLicense] = useState("");
  const [panCard, setPanCard] = useState("");
  const [voterCard, setVoterCard] = useState("");
  const [passport, setPassport] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  // redirect to home page if logged in
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    // else if (details) {
    //   setName(details.user.name);
    //   setBio(details.bio);
    //   setAddress(details.address);
    //   setEmail(details.user.email);
    //   setPhn(details.phn_no);
    //   setDob(details.dob);
    // }
    // // show alert message & redirect to home page if error exists
    // else if (error) {
    //   alert(error);
    //   history.push("/");
    // }
    // // redirect to home page if details does not contain
    // else if (!loading && !details) {
    //   history.push("/");
    // }
  }, [history, userInfo]);

  //   // fetch details after update
  //   useEffect(() => {
  //     dispatch(getDetails(location.state.password)); // get password from homeScreen location state passed as props in history object
  //   }, [dispatch, updatedDetails]);

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    // dispatch(
    //   updateDetails({
    //     bio: bio,
    //     address: address,
    //     phn_no: phn,
    //     dob: dob.toString().substring(0, 15),
    //   })
    // );
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h1" component="h4">
        Documents Secrets
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper elevation={18} className={classes.paper}>
            {/* {loading ? (
              <Loader />
            ) : error ? (
              <Message children={error} varient="warning" />
            ) : ( */}
            <Grid container spacing={1}>
              {/* LEFT SIDE */}
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-adhaarCard">
                    Adhaar Card
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-adhaarCard"
                    placeholder="Adhaar Card"
                    required
                    type="text"
                    value={addhaarCard}
                    multiline
                    rows={1}
                    inputProps={{
                      style: { fontSize: 26, paddingTop: "0.6rem" },
                    }} // font size of input text
                    onChange={(e) => setAddhaarCard(e.target.value)}
                    labelWidth={148}
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
                    multiline
                    rows={1}
                    value={driverLicense}
                    onChange={(e) => setDriverLicense(e.target.value)}
                    inputProps={{
                      style: {
                        fontSize: 26,
                        paddingTop: "0.6rem",
                        lineHeight: "1.4rem",
                      },
                    }} // font size of input text
                    labelWidth={168}
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
                    rows={1}
                    inputProps={{
                      style: { fontSize: 26, paddingTop: "0.6rem" },
                    }} // font size of input text
                    onChange={(e) => setPanCard(e.target.value)}
                    labelWidth={108}
                  />
                </FormControl>
              </Grid>

              {/* RIGHT SIDE */}
              <Grid item xs={12} md={6}>
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
                    rows={1}
                    inputProps={{
                      style: { fontSize: 26, paddingTop: "0.6rem" },
                    }} // font size of input text
                    onChange={(e) => setVoterCard(e.target.value)}
                    labelWidth={124}
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
                    rows={1}
                    inputProps={{
                      style: { fontSize: 26, paddingTop: "0.6rem" },
                    }} // font size of input text
                    onChange={(e) => setPassport(e.target.value)}
                    labelWidth={104}
                  />
                </FormControl>
              </Grid>
              {/* 
                <Grid
                  item
                  style={{
                    margin: "auto",
                  }}
                  xs={8}
                > */}
              {/* Success message on updating details */}
              {/* {updatedDetails && (
                    <Message
                      varient="success"
                      children="Successfully update details"
                    />
                  )}
                </Grid> */}
              <Button
                className={classes.button}
                onClick={submitHandler}
                size="large"
                variant="contained"
                color="primary"
              >
                UPDATE
              </Button>
            </Grid>
            {/* )} */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DocumentsScreen;
