import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4.8),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "3rem",
  },
  image: {
    marginTop: "-3rem",
    height: "50rem",
  },
  avatar: {
    width: "4.8rem",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "2.2rem",
    lineHeight: "1.8rem",
    letterSpacing: "-0.01em",
    color: "#0062D1",
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

  register_login: {
    paddingTop: theme.spacing(2.8),
    marginLeft: "6rem",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
    },
  },
}));
