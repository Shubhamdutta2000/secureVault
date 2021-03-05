import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { Button, Fab } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getMedical, updateMedical } from "../../redux/actions/medicalAction";

import { useStyles } from "./customStyles/getMedical";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const MedicalScreen = ({ history, location }) => {
  const classes = useStyles();

  // Vaccination Records
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDate, setVaccineDate] = useState("");
  const [administeredBy, setAdministeredBy] = useState("");
  const [administeredAt, setAdministeredAt] = useState("");
  // Medical Illness
  const [medicalIllness, setMedicalIllness] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, medical, error } = useSelector(
    (state) => state.userFetchMedical
  );
  const { medical: updatedMedical } = useSelector(
    (state) => state.userUpdateMedical
  );

  // redirect to home page if logged in
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (medical) {
      setVaccineName(medical.vaccination_records.vaccine_name);
      setVaccineDate(medical.vaccination_records.vaccine_date);
      setAdministeredBy(medical.vaccination_records.administered_by);
      setAdministeredAt(medical.vaccination_records.administered_at);
      setMedicalIllness(medical.medical_illness_long_term);
    }
    // show alert message & redirect to home page if error exists
    else if (error) {
      alert(error);
      history.push("/");
    }
    // redirect to home page if medical does not contain
    else if (!loading && !medical) {
      history.push("/");
    }
  }, [history, userInfo, medical, error]);

  // fetch medical after update
  useEffect(() => {
    dispatch(getMedical(location.state.password)); // get password from homeScreen location state passed as props in history object
  }, [dispatch, updatedMedical]);

  // go Back
  const goBack = () => {
    history.go(-1);
  };

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateMedical({
        vaccination_records: {
          vaccine_name: vaccineName,
          vaccine_date: vaccineDate,
          administered_at: administeredAt,
          administered_by: administeredBy,
        },
        medical_illness_long_term: medicalIllness,
      })
    );
  };

  return (
    <div className={classes.root}>
      {/* go back */}
      <Fab aria-label="goBack" className={classes.goBack} onClick={goBack}>
        <ArrowBackIcon />
      </Fab>
      <Typography className={classes.heading} variant="h1" component="h4">
        Medical Secrets
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
                    <InputLabel htmlFor="outlined-adornment-vaccineName">
                      Vaccine Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-vaccineName"
                      placeholder="Vaccine Name"
                      required
                      type="text"
                      value={vaccineName}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setVaccineName(e.target.value)}
                      labelWidth={168}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-vaccineDate">
                      Vaccine Date
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-vaccineDate"
                      placeholder="Vaccine Date"
                      required
                      multiline
                      rows={1}
                      value={vaccineDate}
                      onChange={(e) => setVaccineDate(e.target.value)}
                      inputProps={{
                        style: {
                          fontSize: 26,
                          paddingTop: "0.6rem",
                          lineHeight: "1.4rem",
                        },
                      }} // font size of input text
                      labelWidth={158}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-administeredBy">
                      Administered By
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-administeredBy"
                      placeholder="Administered By"
                      required
                      type="text"
                      value={administeredBy}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setAdministeredBy(e.target.value)}
                      labelWidth={198}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-administeredAt">
                      Administered At
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-administeredAt"
                      placeholder="Administered At"
                      required
                      type="text"
                      value={administeredAt}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setAdministeredAt(e.target.value)}
                      labelWidth={188}
                    />
                  </FormControl>
                </Grid>

                {/* RIGHT SIDE */}
                <Grid item xs={12} md={6}>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-medicalIllness">
                      Medical Illness
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-medicalIllness"
                      placeholder="Medical Illness"
                      required
                      type="text"
                      value={medicalIllness}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setMedicalIllness(e.target.value)}
                      labelWidth={174}
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
                  {/* Success message on updating documents */}
                  {updatedMedical && (
                    <Message
                      varient="success"
                      children="Successfully update documents"
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

export default MedicalScreen;
