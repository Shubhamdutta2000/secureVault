import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "linear-gradient(90.14deg, #0079A9  0.12%, #58B9DF    108.59%)",
    boxShadow: "6px 6px 15px rgba(0, 0, 0, 0.25)",
    height: "5rem",
  },

  secretVault: {
    color: "inherit",
    textDecoration: "none",
  },

  rightSide: {
    position: "absolute",
    right: "1.8rem",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  userName: {
    fontSize: "1.6rem",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "1.8rem",
    lineHeight: "30rem",
  },
  postIllustration: {
    width: "2.4rem",
  },
  button: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    lineHeight: "1rem",
    letterSpacing: "-0.001em",
    paddingRight: "2.2rem",
    color: "#fff",
  },
}));
