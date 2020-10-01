import React from "react";
import { Switch, Route } from "react-router-dom";
import Job from "../pages/Job";
import Login from "../pages/Login";
import JobDetail from "../pages/JobDetail";
import ProtectiveRoute from "./ProtectiveRoute";
import ErrorPage from "../pages/ErrorPage";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/login" component={Login} /> */}

      <Route path="/" exact component={Job} />
      <Route path="/login" exact component={Login} />
      <ProtectiveRoute path="/detail/:id" render={() => <JobDetail />} />
      {/* <Route path="/detail" exact component={JobDetail} /> */}
      <Route path="*" exact component={ErrorPage} />
      {/* <Route
        path="/detail"
        exact
        render={(props) => <JobDetail name="linh" />}
      />{" "}
      //use this if need to transfer props */}
    </Switch>
  );
};

export default Routes;
