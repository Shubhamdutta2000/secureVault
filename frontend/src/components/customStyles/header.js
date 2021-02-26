import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "linear-gradient(90.14deg, #0079A9  0.12%, #58B9DF    108.59%)",
    boxShadow: "6px 6px 15px rgba(0, 0, 0, 0.25)",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "1.4rem",
    lineHeight: "1rem",
  },
  postIllustration: {
    width: "2.2rem",
  },
  button: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    lineHeight: "1rem",
    letterSpacing: "-0.001em",
    paddingRight: "1.2rem",
  },
}));