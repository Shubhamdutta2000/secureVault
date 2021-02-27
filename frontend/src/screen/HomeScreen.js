import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button, TextField } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/detailsAction";

import { useStyles } from "./Custom Styles/homeScreen";

const HomeScreen = ({ history }) => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { details, error } = useSelector((state) => state.userDetails);

  const allsecrets = useRef(null);
  const executeScroll = () => {
    allsecrets.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = () => {
    dispatch(getDetails(password));
    console.log(details);
    if (details) {
      history.push("/details");
    } else if (error) {
      alert(error.message);
    }
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <img
            src="assets/images/globe.png"
            className={classes.image}
            alt="globe"
          />
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
        <Grid item xs={12} md={4}>
          <img
            onClick={handleClickOpen}
            className={classes.doc}
            src="assets/images/folder.png"
            alt="details_folder"
          />
          <Typography
            className={classes.folder_name}
            variant="h3"
            component="h4"
          >
            Details
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            onClick={handleClickOpen}
            className={classes.doc}
            src="assets/images/folder.png"
            alt="details_folder"
          />
          <Typography
            className={classes.folder_name}
            variant="h3"
            component="h4"
          >
            Documents
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            onClick={handleClickOpen}
            className={classes.doc}
            src="assets/images/folder.png"
            alt="details_folder"
          />
          <Typography
            className={classes.folder_name}
            variant="h3"
            component="h4"
          >
            Education
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            onClick={handleClickOpen}
            className={classes.doc}
            src="assets/images/folder.png"
            alt="details_folder"
          />
          <Typography
            className={classes.folder_name}
            variant="h3"
            component="h4"
          >
            Career
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            onClick={handleClickOpen}
            className={classes.doc}
            src="assets/images/folder.png"
            alt="details_folder"
          />
          <Typography
            className={classes.folder_name}
            variant="h3"
            component="h4"
          >
            Medical
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            onClick={handleClickOpen}
            className={classes.doc}
            src="assets/images/folder.png"
            alt="details_folder"
          />
          <Typography
            className={classes.folder_name}
            variant="h3"
            component="h4"
          >
            Finance
          </Typography>
        </Grid>
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
            onClick={handleSubmit}
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
