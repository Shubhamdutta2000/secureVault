import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";

//image
import resumeDoc from "../../assets/images/docs.png";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getDetails, updateDetails } from "../../redux/actions/detailsAction";

import { useStyles } from "./customStyles/getCareer";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const CareerScreen = ({ history, location }) => {
  const classes = useStyles();

  const [companyName, setCompanyName] = useState("");
  const [companyPost, setCompanyPost] = useState("");
  const [inHand, setInHand] = useState("");
  const [ctc, setCtc] = useState("");
  const [salarySlips, setSalarySlips] = useState("");
  const [freelance, setFreelance] = useState("");
  const [bussiness, setBussiness] = useState("");
  const [nonProfits, setNonProfits] = useState("");

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
    }
    // else if (career) {
    //   setCompanyName(career.company_name);
    //   setCompanyPost(career.company_post);
    //   setCtc(career.ctc);
    //   setFreelance(career.freelance);
    //   setInHand(career.in_hand);
    //   setBussiness(career.bussiness);
    //   setNonProfits(career.non_profits);
    //   setSalarySlips(career.salary_slips);
    // }
    // show alert message & redirect to home page if error exists
    // else if (error) {
    //   alert(error);
    //   history.push("/");
    // }
    // // redirect to home page if career does not contain
    // else if (!loading && !career) {
    //   history.push("/");
    // }
  }, [history, userInfo, loading]);

  // fetch career after update
  // useEffect(() => {
  //   dispatch(getDetails(location.state.password)); // get password from homeScreen location state passed as props in history object
  // }, [dispatch, updatedDetails]);

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
        Career Secrets
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
                  {/* Career Instances */}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.leftSubHeading}
                  >
                    Career Instances
                  </Typography>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-companyName">
                      Company Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-companyName"
                      placeholder="Company Name"
                      required
                      type="text"
                      value={companyName}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setCompanyName(e.target.value)}
                      labelWidth={184}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-companyPost">
                      Company Post
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-companyPost"
                      placeholder="Company Post"
                      required
                      value={companyPost}
                      onChange={(e) => setCompanyPost(e.target.value)}
                      multiline
                      rows={1}
                      inputProps={{
                        style: {
                          fontSize: 20,
                          paddingTop: "0.6rem",
                          lineHeight: "1.4rem",
                        },
                      }} // font size of input text
                      labelWidth={170}
                    />
                  </FormControl>
                  {/* sub sub heading (Finance) */}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.leftSubSubHeading}
                  >
                    Finance
                  </Typography>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-inHand">
                      In Hand
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-inHand"
                      placeholder="In Hand"
                      required
                      type="text"
                      value={inHand}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setInHand(e.target.value)}
                      labelWidth={90}
                    />
                  </FormControl>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-ctc">
                      CTC
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-ctc"
                      placeholder="CTC"
                      required
                      type="text"
                      value={ctc}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setCtc(e.target.value)}
                      labelWidth={50}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-salarySlips">
                      Salary Slips
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-salarySlips"
                      placeholder="Salary Slips"
                      required
                      type="text"
                      value={salarySlips}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setSalarySlips(e.target.value)}
                      labelWidth={138}
                    />
                  </FormControl>
                </Grid>

                {/* RIGHT SIDE */}
                <Grid item xs={12} md={6}>
                  {/* Resume */}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.resumeHeading}
                  >
                    Resume
                  </Typography>
                  <img
                    className={classes.resumeDoc}
                    src={resumeDoc}
                    alt="resume doc"
                  />

                  {/* Non Service Persuits */}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.nonServiceHeading}
                  >
                    Non Service Persuits
                  </Typography>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-freelance">
                      Freelance
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-freelance"
                      placeholder="Freelance"
                      required
                      type="text"
                      value={freelance}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setFreelance(e.target.value)}
                      labelWidth={114}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-bussiness">
                      Bussiness
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-bussiness"
                      placeholder="Bussiness"
                      required
                      type="text"
                      value={bussiness}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setBussiness(e.target.value)}
                      labelWidth={122}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-nonProfits">
                      Non Profits
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-nonProfits"
                      placeholder="Non Profits"
                      required
                      type="text"
                      value={nonProfits}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setNonProfits(e.target.value)}
                      labelWidth={132}
                    />
                  </FormControl>
                </Grid>

                {/* <Grid
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
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CareerScreen;
