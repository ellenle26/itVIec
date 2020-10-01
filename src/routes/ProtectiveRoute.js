import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectiveRoute = (props) => {
  let user = useSelector((state) => state.auth.user);
  console.log(user);
  if (user.mail && user.pass) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectiveRoute;
