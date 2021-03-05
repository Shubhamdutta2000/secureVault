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
import BusinessIcon from "@material-ui/icons/Business";
import PaymentIcon from "@material-ui/icons/Payment";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import MoneyIcon from "@material-ui/icons/Money";
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
import { postCareer } from "../../redux/actions/careerAction";

import { useStyles } from "./customStyles/postCareer";

const PostCareer = ({ history }) => {
  const classes = useStyles();

  const [resume, setResume] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyPost, setCompanyPost] = useState("");
  const [inHand, setInHand] = useState("");
  const [ctc, setCtc] = useState("");
  const [salarySlips, setSalarySlips] = useState("");
  const [freelance, setFreelance] = useState("");
  const [bussiness, setBussiness] = useState("");
  const [nonProfits, setNonProfits] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");
  const [content, setContent] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, career, error } = useSelector(
    (state) => state.userPostCareer
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
      postCareer({
        resume: resume,
        career_instances: {
          company_name: companyName,
          company_post: companyPost,
          finance: {
            in_hand: inHand,
            ctc: ctc,
            salary_slips: salarySlips,
          },
        },
        non_service_persuits: {
          freelancing: freelance,
          bussiness: bussiness,
          non_profits: nonProfits,
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
      <Grid container spacing={6}>
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
              <MenuItem value="">Career</MenuItem>
              <MenuItem value="education">Education</MenuItem>
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
              {/*// FORM FOR CAREER POST //*/}
              {/* Career Instances */}
              <Typography
                component="h3"
                variant="h4"
                className={classes.paper1subHeading}
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
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <BusinessIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  labelWidth={148}
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
                  type="text"
                  value={companyPost}
                  startAdornment={
                    <InputAdornment position="start">
                      <BusinessIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setCompanyPost(e.target.value)}
                  labelWidth={136}
                />
              </FormControl>

              {/* FINANCE */}
              <form className={classes.financeForm}>
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-inHand">
                    In Hand
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-inHand"
                    placeholder="in Hand"
                    required
                    type="text"
                    value={inHand}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <PaymentIcon color="primary" className={classes.icon} />
                      </InputAdornment>
                    }
                    onChange={(e) => setInHand(e.target.value)}
                    labelWidth={74}
                  />
                </FormControl>
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-ctc">CTC</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-ctc"
                    placeholder="CTC"
                    required
                    type="text"
                    value={ctc}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountBalanceWalletIcon
                          color="primary"
                          className={classes.icon}
                        />
                      </InputAdornment>
                    }
                    onChange={(e) => setCtc(e.target.value)}
                    labelWidth={42}
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
                    startAdornment={
                      <InputAdornment position="start">
                        <ListAltIcon color="primary" className={classes.icon} />
                      </InputAdornment>
                    }
                    onChange={(e) => setSalarySlips(e.target.value)}
                    labelWidth={112}
                  />
                </FormControl>
              </form>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={24} className={classes.paper}>
            <form className={classes.form}>
              {/* RESUME LINK */}
              <Typography
                className={classes.paper2subHeading}
                variant="h1"
                component="h4"
              >
                Resume
              </Typography>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-resume">
                  Resume
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-resume"
                  placeholder="Resume"
                  required
                  type="text"
                  value={resume}
                  multiline
                  rows={2}
                  inputProps={{
                    style: { fontSize: 18, paddingTop: "2rem" },
                  }} // font size of input text
                  startAdornment={
                    <InputAdornment position="start">
                      <PermContactCalendarIcon
                        color="primary"
                        className={classes.icon}
                      />
                    </InputAdornment>
                  }
                  onChange={(e) => setResume(e.target.value)}
                  labelWidth={78}
                />
              </FormControl>

              {/* PASSWORD */}
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
                  labelWidth={94}
                />
              </FormControl>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={24} className={classes.paper}>
            <form className={classes.form}>
              {/* NON SERVICES PERSUITS */}
              <Typography
                component="h3"
                variant="h4"
                className={classes.paper3subHeading}
              >
                Non Service Persuits
              </Typography>
              {/* Freelancing */}
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
                  startAdornment={
                    <InputAdornment position="start">
                      <BusinessCenterIcon
                        color="primary"
                        className={classes.icon}
                      />
                    </InputAdornment>
                  }
                  onChange={(e) => setFreelance(e.target.value)}
                  labelWidth={92}
                />
              </FormControl>
              {/* Bussiness */}
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
                  startAdornment={
                    <InputAdornment position="start">
                      <BusinessIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setBussiness(e.target.value)}
                  labelWidth={97}
                />
              </FormControl>
              {/* Non Profit */}
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-nonProfits">
                  Non Profit
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-nonProfits"
                  placeholder="Non Profit"
                  required
                  type="text"
                  value={nonProfits}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <MoneyIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={(e) => setNonProfits(e.target.value)}
                  labelWidth={95}
                />
              </FormControl>
            </form>
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

export default PostCareer;
