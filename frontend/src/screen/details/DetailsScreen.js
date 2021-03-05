import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getDetails, updateDetails } from "../../redux/actions/detailsAction";

import { useStyles } from "./customStyles/getDetails";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const DetailsScreen = ({ history, location }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [dob, setDob] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, details, error } = useSelector(
    (state) => state.userFetchDetails
  );

  const { details: updatedDetails } = useSelector(
    (state) => state.userUpdateDetails
  );

  // redirect to home page if logged in
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (details) {
      setName(details.user.name);
      setBio(details.bio);
      setAddress(details.address);
      setEmail(details.user.email);
      setPhn(details.phn_no);
      setDob(details.dob);
    }
    // show alert message & redirect to home page if error exists
    else if (error) {
      alert(error);
      history.push("/");
    }
    // redirect to home page if details does not contain
    else if (!loading && !details) {
      history.push("/");
    }
  }, [history, userInfo, details, loading]);

  // fetch details after update
  useEffect(() => {
    dispatch(getDetails(location.state.password)); // get password from homeScreen location state passed as props in history object
  }, [dispatch, updatedDetails]);

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateDetails({
        bio: bio,
        address: address,
        phn_no: phn,
        dob: dob.toString().substring(0, 15),
      })
    );
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h1" component="h4">
        Details Secrets
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper elevation={18} className={classes.paper}>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message children={error} varient="warning" />
            ) : (
              <Grid container spacing={1}>
                {/* LEFT SIDE */}
                <Grid item xs={12} md={6}>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-name">
                      Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-name"
                      placeholder="Name"
                      required
                      type="text"
                      value={name}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setName(e.target.value)}
                      labelWidth={65}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-bio">
                      Bio
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-bio"
                      placeholder="Bio"
                      required
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      multiline
                      rows={4}
                      inputProps={{
                        style: {
                          fontSize: 20,
                          paddingTop: "0.6rem",
                          lineHeight: "1.4rem",
                        },
                      }} // font size of input text
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
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setAddress(e.target.value)}
                      labelWidth={98}
                    />
                  </FormControl>
                </Grid>

                {/* RIGHT SIDE */}
                <Grid item xs={12} md={6}>
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
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setEmail(e.target.value)}
                      labelWidth={66}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-phn">
                      Phone
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-phn"
                      placeholder="Phone"
                      required
                      type="text"
                      value={phn}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setPhn(e.target.value)}
                      labelWidth={78}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-dob">
                      DOB
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-dob"
                      placeholder="Date Of Birth"
                      required
                      type="text"
                      value={dob}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setDob(e.target.value)}
                      labelWidth={55}
                    />
                  </FormControl>
                </Grid>

                <Grid
                  item
                  style={{
                    margin: "auto",
                  }}
                  xs={8}
                >
                  {/* Success message on updating details */}
                  {updatedDetails && (
                    <Message
                      varient="success"
                      children="Successfully update details"
                    />
                  )}
                </Grid>
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
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsScreen;
