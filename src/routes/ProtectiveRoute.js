import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectiveRoute = (props) => {
  if (true) {
    return <Route {...props} />;
  } else {
    return <Redirect path="/login" />;
  }
};

export default ProtectiveRoute;
