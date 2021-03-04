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
import doc from "../../assets/images/docs.png";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  getEducation,
  updateEducation,
} from "../../redux/actions/educationAction";

import { useStyles } from "./customStyles/getEducation";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const EducationScreen = ({ history, location }) => {
  const classes = useStyles();

  /*
class_representative_boards:
            -  name
            -  marks
            -  grade
            - admit_card
            - registration_card
            - pass_certificate
            - grade_certificate

college: 
          - name
          - degree
          - course
          - discipline
          - semester_sheets
          - final_year_projects
          - degree_certificates: Array,
          - other_certificate:
                   -   academy
                   -  sports
                   -  events
*/
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
  const [semesterSheets, setSemesterSheets] = useState("");
  const [finalYearProjects, setFinalYearProjects] = useState("");
  const [degreeCertificate, setdegreeCertificate] = useState("");
  const [otherCertificate, setOtherCertificate] = useState({
    academy: "",
    sports: "",
    events: "",
  });

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, education, error } = useSelector(
    (state) => state.userFetchEducation
  );
  const { education: updatedEducation } = useSelector(
    (state) => state.userUpdateEducation
  );

  // redirect to home page if logged in
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (education) {
      //school
      setSchoolName(education.class_representative_boards.name);
      setMarks(education.class_representative_boards.marks);
      setGrade(education.class_representative_boards.grade);
      setAdmitCard(education.class_representative_boards.admit_card);
      setRegistrationCard(
        education.class_representative_boards.registration_card
      );
      setPassCertificate(
        education.class_representative_boards.pass_certificate
      );
      setGradeCertificate(
        education.class_representative_boards.grade_certificate
      );

      //college
      setCollegeName(education.college.name);
      setDegree(education.college.degree);
      setCourse(education.college.course);
      setDiscipline(education.college.discipline);
      setSemesterSheets(education.college.semester_sheets);
      setFinalYearProjects(education.college.final_year_projects);
      setdegreeCertificate(education.college.degree_certificates);
      setOtherCertificate(education.college.other_certificate);
    }
    // show alert message & redirect to home page if error exists
    else if (error) {
      alert(error);
      history.push("/");
    }
    // redirect to home page if education does not contain
    else if (!loading && !education) {
      history.push("/");
    }
  }, [history, userInfo, education, loading]);

  // fetch education after update
  useEffect(() => {
    dispatch(getEducation(location.state.password)); // get password from homeScreen location state passed as props in history object
  }, [dispatch, updatedEducation]);

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateEducation({
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
          semester_sheets: semesterSheets,
          final_year_projects: finalYearProjects,
          degree_certificates: degreeCertificate,
          other_certificate: otherCertificate,
        },
      })
    );
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h1" component="h4">
        Education Secrets
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
                {/* 1st PART */}

                {/* LEFT SIDE */}
                <Grid item xs={12} md={6}>
                  {/* Class Representative Boards */}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.boardHeading}
                  >
                    Class Representative Boards
                  </Typography>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-schoolName">
                      School Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-schoolName"
                      placeholder="School Name"
                      required
                      type="text"
                      value={schoolName}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setSchoolName(e.target.value)}
                      labelWidth={156}
                    />
                  </FormControl>

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
                      rows={1}
                      inputProps={{
                        style: {
                          fontSize: 26,
                          paddingTop: "0.6rem",
                          lineHeight: "1.4rem",
                        },
                      }} // font size of input text
                      labelWidth={72}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-grade">
                      Grade
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-grade"
                      placeholder="Grade"
                      required
                      type="text"
                      value={grade}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setGrade(e.target.value)}
                      labelWidth={72}
                    />
                  </FormControl>
                </Grid>

                {/* RIGHT SIDE */}
                <Grid item xs={12} md={6}>
                  {/* Registration Card */}
                  <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                      <a
                        href={registrationCard}
                        target="_blank"
                        alt="registrationCard"
                      >
                        <img
                          className={classes.doc}
                          src={doc}
                          alt="registrationCard"
                        />
                      </a>
                      <Typography component="h4" variant="h5">
                        Registration Card
                      </Typography>
                    </Grid>

                    {/* Admit Card */}
                    <Grid item xs={12} md={6}>
                      <a href={admitCard} target="_blank" alt="admitCard">
                        <img
                          className={classes.doc}
                          src={doc}
                          alt="admitCard"
                        />
                      </a>
                      <Typography component="h4" variant="h5">
                        Admit Card
                      </Typography>
                    </Grid>

                    {/* Pass Certificate*/}
                    <Grid item xs={12} md={6}>
                      <a
                        href={passCertificate}
                        target="_blank"
                        alt="passCertificate"
                      >
                        <img
                          className={classes.doc}
                          src={doc}
                          alt="passCertificate"
                        />
                      </a>
                      <Typography component="h4" variant="h5">
                        Pass Certificate
                      </Typography>
                    </Grid>

                    {/* Grade Certificate*/}
                    <Grid item xs={12} md={6}>
                      <a
                        href={gradeCertificate}
                        target="_blank"
                        alt="gradeCertificate"
                      >
                        <img
                          className={classes.doc}
                          src={doc}
                          alt="gradeCertificate"
                        />
                      </a>
                      <Typography component="h4" variant="h5">
                        Grade Certificate
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
        {/* 2nd Paper */}
        <Grid item xs={12}>
          <Paper elevation={18} className={classes.paper}>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message children={error} varient="warning" />
            ) : (
              <Grid container spacing={1}>
                {/* 1st PART */}

                <Grid item xs={12} md={6}>
                  {/* College */}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.collegeHeading}
                  >
                    College
                  </Typography>

                  {/* College Name */}
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-collegeName">
                      College Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-collegeName"
                      placeholder="College Name"
                      required
                      type="text"
                      value={collegeName}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setCollegeName(e.target.value)}
                      labelWidth={164}
                    />
                  </FormControl>

                  {/* College Degree  */}
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-degree">
                      Degree
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-degree"
                      placeholder="Degree"
                      required
                      type="text"
                      value={degree}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setDegree(e.target.value)}
                      labelWidth={84}
                    />
                  </FormControl>

                  {/* Course */}
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-course">
                      Course
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-course"
                      placeholder="Course"
                      required
                      type="text"
                      value={course}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setCourse(e.target.value)}
                      labelWidth={84}
                    />
                  </FormControl>

                  {/* Discipline */}
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-discipline">
                      Discipline
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-discipline"
                      placeholder="Discipline"
                      required
                      type="text"
                      value={discipline}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setDiscipline(e.target.value)}
                      labelWidth={117}
                    />
                  </FormControl>

                  <Grid container spacing={0}>
                    {/* Semester Sheets */}
                    <Grid item xs={12} md={6}>
                      <a
                        href={semesterSheets}
                        target="_blank"
                        alt="Semester Sheets"
                      >
                        <img
                          className={classes.doc}
                          src={doc}
                          alt="Semester Sheets"
                        />
                      </a>
                      <Typography component="h4" variant="h5">
                        Semester Sheets
                      </Typography>
                    </Grid>

                    {/* Final Year Project */}
                    <Grid item xs={12} md={6}>
                      <a
                        href={finalYearProjects}
                        target="_blank"
                        alt="Final Year Project"
                      >
                        <img
                          className={classes.doc}
                          src={doc}
                          alt="Final Year Project"
                        />
                      </a>
                      <Typography component="h4" variant="h5">
                        Final Year Project
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-semesterSheets">
                      Semester Sheets
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-semesterSheets"
                      placeholder="Semester Sheets"
                      required
                      type="text"
                      value={semesterSheets}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setSemesterSheets(e.target.value)}
                      labelWidth={194}
                    />
                  </FormControl> */}

                  {/* Final Year Projects */}
                  {/* <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-finalYearProjects">
                      Final Year Projects
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-finalYearProjects"
                      placeholder="Final Year Projects"
                      required
                      type="text"
                      value={finalYearProjects}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setFinalYearProjects(e.target.value)}
                      labelWidth={218}
                    />
                  </FormControl> */}
                </Grid>

                <Grid item xs={12} md={6}>
                  {/* Degree Certificate */}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.gradeHeading}
                  >
                    Degree Certificate
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <a
                        href={degreeCertificate}
                        target="_blank"
                        alt="degreeCertificate"
                      >
                        <img
                          className={classes.doc}
                          src={doc}
                          alt="degreeCertificate"
                        />
                      </a>
                    </Grid>
                  </Grid>

                  {/* Other Certificate */}
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.otherCertificateHeading}
                  >
                    Other Certificate
                  </Typography>

                  <Grid container spacing={6}>
                    {/* Academy */}
                    <Grid item xs={12} md={6}>
                      <a
                        href={otherCertificate.academy}
                        target="_blank"
                        alt="Academy"
                      >
                        <img className={classes.doc} src={doc} alt="Academy" />
                      </a>
                      <Typography component="h4" variant="h5">
                        Academy
                      </Typography>
                    </Grid>

                    {/* Sports */}
                    <Grid item xs={12} md={6}>
                      <a
                        href={otherCertificate.sports}
                        target="_blank"
                        alt="Sports"
                      >
                        <img className={classes.doc} src={doc} alt="Sports" />
                      </a>
                      <Typography component="h4" variant="h5">
                        Sports
                      </Typography>
                    </Grid>

                    {/* Events */}
                    <Grid item xs={12} md={6}>
                      <a
                        href={otherCertificate.events}
                        target="_blank"
                        alt="Events"
                      >
                        <img className={classes.doc} src={doc} alt="Events" />
                      </a>
                      <Typography component="h4" variant="h5">
                        Events
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>

        {/* Success message on updating details */}
        <Grid
          item
          style={{
            margin: "auto",
            marginTop: "-2.8rem",
          }}
          xs={8}
        >
          {updateEducation && (
            <Message
              varient="success"
              children="Successfully update Education"
            />
          )}
        </Grid>

        {/* Update Button  */}
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
    </div>
  );
};

export default EducationScreen;
