import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    position: "absolute",
    top: "16rem",
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: "3.6rem",
    lineHeight: "127px",

    letterSpacing: " -0.001em",
    background:
      "linear-gradient(10.56deg,  #003145    0.49%,rgba(0, 152, 176, 0.26) 114.34%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  para: {
    position: "absolute",
    top: "50%",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "2rem",
    lineHeight: "3rem",
    letterSpacing: "-0.001em",

    color: "#1488B5",
  },
  image: {
    width: "32rem",
    marginLeft: "6rem",
  },
  button: {
    position: "absolute",
    top: "60%",
    background:
      "linear-gradient(90.56deg, #0079A9 0.49%, rgba(100, 200, 240, 0.74) 114.34%)",
    borderRadius: "75px",
    width: "14rem",
    height: "4rem",

    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "1.45rem",
    textAlign: "center",
    letterSpacing: "-0.01em",
    color: "#FFFFFF",
    letterSpacing: "0.005em",
    filter: "drop-shadow(12px 12px 10px rgba(0, 0, 0, 0.42))",
  },
});

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Typography className={classes.heading} variant="h1" component="h2">
          Welcome To Secret Vault
        </Typography>
        <Typography className={classes.para} variant="h1" component="h2">
          Your secrets are safe with us
        </Typography>
        <Button className={classes.button}>Continue</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="assets/images/globe.png"
          className={classes.image}
          alt="globe"
        />
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
