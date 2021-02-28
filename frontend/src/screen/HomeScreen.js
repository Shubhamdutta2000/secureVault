import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button, TextField } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import folder from "../assets/images/folder.png";
import globe from "../assets/images/globe.png";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/detailsAction";

import { useStyles } from "./Custom Styles/homeScreen";

const HomeScreen = ({ history }) => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(""); // set content on every click on content folders

  const contents = [
    "Details",
    "Documents",
    "Career",
    "Education",
    "Finance",
    "Medical",
  ];

  const dispatch = useDispatch();
  const { details, error } = useSelector((state) => state.userDetails);

  const allsecrets = useRef(null);
  const executeScroll = () => {
    allsecrets.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [details, error]);

  console.log(content);

  // open dialog box and set content
  const handleClickOpen = (content) => {
    setContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // submit acc. to content
  const handleSubmit = (content) => {
    if (content === "Details") {
      dispatch(getDetails(password));
      history.push("/details");
      setOpen(false);
    }
  };

  return (
    <>
      {/* top part of page */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography className={classes.heading} variant="h1" component="h2">
            Welcome To Secret Vault
          </Typography>
          <Typography className={classes.para} variant="h1" component="h2">
            Your secrets are safe with us
          </Typography>
          <Button className={classes.button} onClick={executeScroll}>
            Continue
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={globe} className={classes.image} alt="globe" />
        </Grid>
      </Grid>

      {/* all secrets sections */}
      <Typography
        ref={allsecrets}
        className={classes.allSecrets}
        variant="h2"
        component="h4"
      >
        All Secrets
      </Typography>
      <Grid container spacing={1}>
        {contents.map((content, index) => {
          return (
            <Grid key={index} item xs={12} md={4}>
              <img
                onClick={() => handleClickOpen(content)}
                className={classes.doc}
                src={folder}
                alt="details_folder"
              />
              <Typography
                className={classes.folder_name}
                variant="h3"
                component="h4"
              >
                {content}
              </Typography>
            </Grid>
          );
        })}
      </Grid>

      {/*// DIALOG BOX //*/}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
          Enter Password to show Content
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            className={classes.input}
            autoFocus
            margin="dense"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="Password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            className={classes.dialogButton}
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Close
          </Button>
          <Button
            size="large"
            onClick={() => handleSubmit(content)} // submit acc. to content onCLick
            className={classes.dialogButton}
            color="primary"
          >
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomeScreen;
