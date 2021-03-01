import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  heading: {
    position: "absolute",
    top: "18rem",
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: "4.4rem",
    lineHeight: "127px",
    letterSpacing: " -0.001em",
    background:
      "linear-gradient(10.56deg,  #003145    0.49%,rgba(0, 152, 176, 0.26) 114.34%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  para: {
    position: "absolute",
    top: "58%",
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: "2.2rem",
    lineHeight: "1rem",
    letterSpacing: "-0.001em",
    color: "#1488B5",
  },
  image: {
    width: "32rem",
    marginLeft: "6rem",
  },
  button: {
    position: "absolute",
    top: "66%",
    background:
      "linear-gradient(90.56deg, #0079A9 0.49%, rgba(100, 200, 240, 0.74) 114.34%)",
    borderRadius: "28rem",
    width: "16rem",
    height: "4.2rem",

    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "1.7rem",
    textAlign: "center",
    letterSpacing: "-0.01em",
    color: "#FFFFFF",
    letterSpacing: "0.005em",
    filter: "drop-shadow(12px 12px 10px rgba(0, 0, 0, 0.42))",
  },
  allSecrets: {
    paddingTop: "5.4rem",
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: "5.4rem",
    lineHeight: "127px",
    letterSpacing: "-0.01em",
    color: "#005D81",
  },
  doc: {
    paddingTop: "4rem",
    cursor: "pointer",
    filter: "drop-shadow(10px 10px 24px rgba(0, 0, 0, 0.42))",
  },
  folder_name: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontWeight: "400",
    fontSize: "3.2rem",
    lineHeight: "6rem",
    letterSpacing: "-0.01em",
    color: "#016E99",
  },

  input: {
    "& label": {
      fontWeight: "550",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#46BFE0",
      },
    },
    paddingBottom: "1.4rem",
    width: "100%",
  },
  dialogTitle: {
    color: "#00648C",
  },
  dialogButton: {
    fontWeight: "700",
  },
});
