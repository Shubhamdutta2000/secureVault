import React, { useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import { useStyles } from "./Custom Styles/homeScreen";

const HomeScreen = () => {
  const classes = useStyles();

  const allsecrets = useRef(null);
  const executeScroll = () => {
    allsecrets.current.scrollIntoView({
      behavior: "smooth",
    });
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
    </>
  );
};

export default HomeScreen;
