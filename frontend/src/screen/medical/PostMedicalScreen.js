import React, { useState, useEffect } from "react";
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
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PersonIcon from "@material-ui/icons/Person";
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
import { postMedical } from "../../redux/actions/medicalAction";

import { useStyles } from "./customStyles/postMedical";

const PostMedical = ({ history }) => {
  const classes = useStyles();

  // Vaccination Records
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDate, setVaccineDate] = useState("");
  const [administeredBy, setAdministeredBy] = useState("");
  const [administeredAt, setAdministeredAt] = useState("2000-01-01T21:11:00");
  // Medical Illness
  const [medicalIllness, setMedicalIllness] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");
  const [content, setContent] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, medical, error } = useSelector(
    (state) => state.userPostMedical
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
      postMedical({
        vaccination_records: {
          vaccine_name: vaccineName,
          vaccine_date: vaccineDate,
          administered_at: administeredAt,
          administered_by: administeredBy,
        },
        medical_illness_long_term: medicalIllness,
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
              <MenuItem value="documents">Documents</MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="career">Career</MenuItem>
              <MenuItem value="finance">Finance</MenuItem>
              <MenuItem value="">Medical</MenuItem>
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
            {/*// FORM FOR MEDICAL POST //*/}
            <form className={classes.form}>
              {/* Vaccinational Records */}
              <Typography
                className={classes.vaccineHeading}
                variant="h1"
                component="h4"
              >
                Vaccinational Records
              </Typography>

              <form className={classes.medicalForm}>
                {/* Vaccine Name */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-vaccineName">
                    Vaccine Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-vaccineName"
                    placeholder="Vaccine Name"
                    required
                    value={vaccineName}
                    onChange={(e) => setVaccineName(e.target.value)}
                    inputProps={{
                      style: { paddingTop: "1rem" },
                    }} // font size of input text
                    startAdornment={
                      <InputAdornment position="start">
                        <LocalHospitalIcon
                          color="primary"
                          className={classes.icon}
                        />
                      </InputAdornment>
                    }
                    labelWidth={138}
                  />
                </FormControl>

                {/* vaccine Date */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-vaccineDate">
                    Vaccine Date
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-vaccineDate"
                    placeholder="Vaccine Date"
                    required
                    type="text"
                    value={vaccineDate}
                    startAdornment={
                      <InputAdornment position="start">
                        <LocalHospitalIcon
                          color="primary"
                          className={classes.icon}
                        />
                      </InputAdornment>
                    }
                    onChange={(e) => setVaccineDate(e.target.value)}
                    labelWidth={124}
                  />
                </FormControl>

                {/* Administered By */}
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
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon color="primary" className={classes.icon} />
                      </InputAdornment>
                    }
                    onChange={(e) => setAdministeredBy(e.target.value)}
                    labelWidth={160}
                  />
                </FormControl>

                {/* Administered At */}
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
                      label="Adminstered At"
                      value={administeredAt}
                      inputProps={{
                        style: { paddingTop: "0.4rem" },
                      }} // font size of input text
                      onChange={(e) => setAdministeredAt(e)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </FormControl>
              </form>

              {/* Medical Illness */}
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
                  startAdornment={
                    <InputAdornment position="start">
                      <LocalHospitalIcon
                        color="primary"
                        className={classes.icon}
                      />
                    </InputAdornment>
                  }
                  onChange={(e) => setMedicalIllness(e.target.value)}
                  labelWidth={144}
                />
              </FormControl>

              {/* Password */}
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

export default PostMedical;
