import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4.8),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "0rem",
  },

  input: {
    "& label": {
      color: theme.palette.info.main,
      fontWeight: "550",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#46BFE0",
      },
    },
    paddingBottom: theme.spacing(2.5),
    width: "80%",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  button: {
    background:
      "linear-gradient(90.77deg, #0181B4 0.67%, rgba(100, 200, 240, 0.82) 108.14%)",
    width: "80%",
    marginBottom: "0.4rem",
    borderRadius: "10rem",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },

    fontWeight: "600",
    fontSize: "1.4rem",
    lineHeight: "2rem",
    letterSpacing: "-0.01em",
    color: "#FFFFFF",
  },

  icon: {
    width: "1.2rem",
  },
  postImage: {
    height: "28rem",
    marginTop: "3rem",
  },
}));
