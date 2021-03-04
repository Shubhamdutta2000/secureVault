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
import SchoolIcon from "@material-ui/icons/School";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import GradeIcon from "@material-ui/icons/Grade";
import LinkIcon from "@material-ui/icons/Link";
import ScheduleIcon from "@material-ui/icons/Schedule";
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
import { postEducation } from "../../redux/actions/educationAction";

import { useStyles } from "./customStyles/postEducation";

const PostEducation = ({ history }) => {
  const classes = useStyles();

  // school
  const [schoolName, setSchoolName] = useState("");
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");
  const [admitCard, setAdmitCard] = useState("");
  const [registrationCard, setRegistrationCard] = useState("");
  const [passCertificate, setPassCertificate] = useState("");
  const [gradeCertificate, setGradeCertificate] = useState("");

  //college
  const [collegeName, setCollegeName] = useState("");
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [semesterSheet, setSemesterSheet] = useState("");
  const [finalYearProject, setFinalYearProject] = useState("");
  const [degreeCertificate, setDegreeCertificate] = useState("");
  const [otherCertificate, setOtherCertificate] = useState({
    academy: "",
    sports: "",
    events: "",
  });
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");
  const [content, setContent] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, career, error } = useSelector(
    (state) => state.userPostEducation
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
      postEducation({
        class_representative_boards: {
          name: schoolName,
          marks: marks,
          grade: grade,
          admit_card: admitCard,
          registration_card: registrationCard,
          pass_certificate: passCertificate,
          grade_certificate: gradeCertificate,
        },
        college: {
          name: collegeName,
          degree: degree,
          course: course,
          discipline: discipline,
          semester_sheets: semesterSheet,
          final_year_projects: finalYearProject,
          degree_certificates: degreeCertificate,
          other_certificate: otherCertificate,
        },
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
      <Grid container spacing={2}>
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
              <MenuItem value="career">Career</MenuItem>
              <MenuItem value="">Education</MenuItem>
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
          <Paper elevation={24} className={classes.paper}>
            <form className={classes.form}>
              {/*// FORM FOR EDUCATION POST //*/}
              {/* College */}
              <Typography
                component="h3"
                variant="h4"
                className={classes.boardHeading}
              >
                Class Representative Boards
              </Typography>
              <Grid container justify="space-between">
                {/* School Name */}
                <Grid item xs={12} md={8}>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-schoolName">
                      School Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-schoolName"
                      placeholder="School Name"
                      required
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      multiline
                      startAdornment={
                        <InputAdornment position="start">
                          <SchoolIcon
                            color="primary"
                            className={classes.icon}
                          />
                        </InputAdornment>
                      }
                      labelWidth={120}
                    />
                  </FormControl>
                </Grid>

                {/* School Marks */}
                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-marks">
                      Marks
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-marks"
                      placeholder="Marks"
                      required
                      value={marks}
                      onChange={(e) => setMarks(e.target.value)}
                      multiline
                      startAdornment={
                        <InputAdornment position="start">
                          <EqualizerIcon
                            color="primary"
                            className={classes.icon}
                          />
                        </InputAdornment>
                      }
                      labelWidth={58}
                    />
                  </FormControl>
                </Grid>

                {/* Admit Card */}
                <Grid item xs={12} md={8}>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-admitCard">
                      Admit Card
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-admitCard"
                      placeholder="Admit Card"
                      required
                      value={admitCard}
                      onChange={(e) => setAdmitCard(e.target.value)}
                      multiline
                      startAdornment={
                        <InputAdornment position="start">
                          <LinkIcon color="primary" className={classes.icon} />
                        </InputAdornment>
                      }
                      labelWidth={104}
                    />
                  </FormControl>
                </Grid>

                {/* School Grade */}
                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-grade">
                      Grade
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-grade"
                      placeholder="Grade"
                      required
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      multiline
                      startAdornment={
                        <InputAdornment position="start">
                          <GradeIcon color="primary" className={classes.icon} />
                        </InputAdornment>
                      }
                      labelWidth={58}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              {/* Registration Card */}
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-registrationCard">
                  Registration Card
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-registrationCard"
                  placeholder="Registration Card"
                  required
                  type="text"
                  value={registrationCard}
                  startAdornment={
                    <InputAdornment position="start">
                      <LinkIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setRegistrationCard(e.target.value)}
                  labelWidth={162}
                />
              </FormControl>

              {/* Pass Certificate */}
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-passCertificate">
                  Pass Certificate
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-passCertificate"
                  placeholder="Pass Certificate"
                  required
                  type="text"
                  value={passCertificate}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <LinkIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setPassCertificate(e.target.value)}
                  labelWidth={144}
                />
              </FormControl>

              {/* Grade Certificate */}
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-gradeCertificate">
                  Grade Certificate
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-gradeCertificate"
                  placeholder="Grade Certificate"
                  required
                  type="text"
                  value={gradeCertificate}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <LinkIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setGradeCertificate(e.target.value)}
                  labelWidth={156}
                />
              </FormControl>
            </form>
          </Paper>
        </Grid>

        {/*/// COLLEGE ///*/}
        <Grid item xs={12}>
          <Paper elevation={24} className={classes.paper}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <form className={classes.form}>
                  {/*// FORM FOR EDUCATION POST //*/}
                  {/* College*/}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.collegeHeading}
                  >
                    College
                  </Typography>
                  <Grid container justify="space-between">
                    {/* College Name */}
                    <Grid item xs={12} md={8}>
                      <FormControl variant="outlined" className={classes.input}>
                        <InputLabel htmlFor="outlined-adornment-collegeName">
                          College Name
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-collegeName"
                          placeholder="School Name"
                          required
                          value={collegeName}
                          onChange={(e) => setCollegeName(e.target.value)}
                          multiline
                          startAdornment={
                            <InputAdornment position="start">
                              <SchoolIcon
                                color="primary"
                                className={classes.icon}
                              />
                            </InputAdornment>
                          }
                          labelWidth={128.4}
                        />
                      </FormControl>
                    </Grid>

                    {/* College Degree */}
                    <Grid item xs={12} md={4}>
                      <FormControl variant="outlined" className={classes.input}>
                        <InputLabel htmlFor="outlined-adornment-degree">
                          Degree
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-degree"
                          placeholder="Degree"
                          required
                          value={degree}
                          onChange={(e) => setDegree(e.target.value)}
                          multiline
                          startAdornment={
                            <InputAdornment position="start">
                              <EqualizerIcon
                                color="primary"
                                className={classes.icon}
                              />
                            </InputAdornment>
                          }
                          labelWidth={66}
                        />
                      </FormControl>
                    </Grid>

                    {/* Discipline Percentage */}
                    <Grid item xs={12} md={8}>
                      <FormControl variant="outlined" className={classes.input}>
                        <InputLabel htmlFor="outlined-adornment-discipline">
                          Discipline Percentage
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-discipline"
                          placeholder="Discipline Percentage"
                          required
                          value={discipline}
                          onChange={(e) => setDiscipline(e.target.value)}
                          multiline
                          startAdornment={
                            <InputAdornment position="start">
                              <ScheduleIcon
                                color="primary"
                                className={classes.icon}
                              />
                            </InputAdornment>
                          }
                          labelWidth={198}
                        />
                      </FormControl>
                    </Grid>

                    {/* College course */}
                    <Grid item xs={12} md={4}>
                      <FormControl variant="outlined" className={classes.input}>
                        <InputLabel htmlFor="outlined-adornment-course">
                          Course
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-course"
                          placeholder="Course"
                          required
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          multiline
                          startAdornment={
                            <InputAdornment position="start">
                              <GradeIcon
                                color="primary"
                                className={classes.icon}
                              />
                            </InputAdornment>
                          }
                          labelWidth={66}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>

                  {/* Semester Sheet */}
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-semesterSheet">
                      Semester Sheet
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-semesterSheet"
                      placeholder="Semester Sheet"
                      required
                      type="text"
                      value={semesterSheet}
                      startAdornment={
                        <InputAdornment position="start">
                          <LinkIcon color="primary" className={classes.icon} />
                        </InputAdornment>
                      }
                      onChange={(e) => setSemesterSheet(e.target.value)}
                      labelWidth={146}
                    />
                  </FormControl>

                  {/* Final Year Project */}
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-finalYearProject">
                      Final Year Project
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-finalYearProject"
                      placeholder="Final Year Project"
                      required
                      type="text"
                      value={finalYearProject}
                      multiline
                      startAdornment={
                        <InputAdornment position="start">
                          <LinkIcon color="primary" className={classes.icon} />
                        </InputAdornment>
                      }
                      onChange={(e) => setFinalYearProject(e.target.value)}
                      labelWidth={162}
                    />
                  </FormControl>

                  {/* Degree Certificate */}
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-degreeCertificate">
                      Degree Certificate
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-degreeCertificate"
                      placeholder="Degree Certificate"
                      required
                      type="text"
                      value={degreeCertificate}
                      multiline
                      startAdornment={
                        <InputAdornment position="start">
                          <LinkIcon color="primary" className={classes.icon} />
                        </InputAdornment>
                      }
                      onChange={(e) => setDegreeCertificate(e.target.value)}
                      labelWidth={164}
                    />
                  </FormControl>
                </form>
              </Grid>

              {/* OTHER CERTIFICATES */}
              <Grid item xs={12} md={6}>
                <Typography
                  component="h3"
                  variant="h4"
                  className={classes.otherCertificateHeading}
                >
                  Other Certificate
                </Typography>

                {/* Academy */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-academy">
                    Academy
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-academy"
                    placeholder="Academy"
                    required
                    type="text"
                    value={otherCertificate.academy}
                    startAdornment={
                      <InputAdornment position="start">
                        <LinkIcon className={classes.icon} />
                      </InputAdornment>
                    }
                    onChange={(e) =>
                      setOtherCertificate((prevValue) => {
                        return {
                          ...prevValue,
                          academy: e.target.value,
                        };
                      })
                    }
                    labelWidth={86}
                  />
                </FormControl>

                {/* Sports */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-sports">
                    Sports
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-sports"
                    placeholder="Sports"
                    required
                    type="text"
                    value={otherCertificate.sports}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <LinkIcon className={classes.icon} />
                      </InputAdornment>
                    }
                    onChange={(e) =>
                      setOtherCertificate((prevValue) => {
                        return {
                          ...prevValue,
                          sports: e.target.value,
                        };
                      })
                    }
                    labelWidth={64}
                  />
                </FormControl>

                {/* Events */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-events">
                    Events
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-events"
                    placeholder="Events"
                    required
                    type="text"
                    value={otherCertificate.events}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <LinkIcon className={classes.icon} />
                      </InputAdornment>
                    }
                    onChange={(e) =>
                      setOtherCertificate((prevValue) => {
                        return {
                          ...prevValue,
                          events: e.target.value,
                        };
                      })
                    }
                    labelWidth={64}
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
                    labelWidth={92}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <br />
      {/* show loading or error onSubmit */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient="error">{error}</Message>
      ) : (
        <Message varient="success">POST successfully submitted</Message>
      )}
      <Button
        className={classes.button}
        onClick={submitPostHandler}
        size="large"
        variant="contained"
        color="primary"
      >
        POST
      </Button>
    </div>
  );
};

export default PostEducation;
