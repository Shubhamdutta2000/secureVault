import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "-1rem",
      }}
    >
      <CircularProgress />;
    </div>
  );
}
