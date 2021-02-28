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

import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";

//image
import postIllustration from "../assets/images/postIllustration.png";

// REDUX
import { userLogin } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./Custom Styles/loginSignupForm";

const PostDetails = ({ history }) => {
  const classes = useStyles();

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  });

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <img src={postIllustration} alt="post_image" />
    </div>
  );
};

export default PostDetails;
