import React from "react";
import { Alert } from "@material-ui/lab";

const Message = ({ varient, children }) => {
  return (
    <Alert className="mb-4" severity={varient}>
      {children}
    </Alert>
  );
};

export default Message;
