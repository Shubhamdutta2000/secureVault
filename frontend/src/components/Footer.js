import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "6rem",
    marginBottom: "2rem",
    color: "#5ca2fd",
    textAlign: "center",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Grid container>
        <Grid item xs={12}>
          <Typography component="h5" variant="h5" className={classes.footer}>
            Copyright &copy; 2021 by Shubham Dutta
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
