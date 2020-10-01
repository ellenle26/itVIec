import React from "react";
import Routes from "./routes/Routes";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./App.css";
import { authAction } from "./redux/action/authAction";

function App() {
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authAction.logout());
  };

  return (
    <div>
      <div className="navBar">
        {user.mail && user.pass ? (
          <span style={{ color: "white", position: "absolute", left: "30px" }}>
            {user.mail}
          </span>
        ) : (
          <></>
        )}

        <img src="/images/itvieclogo.png" alt="" className="logo" />

        {user.mail && user.pass ? (
          <span
            style={{ color: "white", position: "absolute", right: "30px" }}
            onClick={() => logout()}
          >
            Log out
          </span>
        ) : (
          <span
            style={{ color: "white", position: "absolute", right: "30px" }}
            onClick={() => history.push(`/login`)}
          >
            Log in
          </span>
        )}
      </div>
      <Routes />
    </div>
  );
}

export default App;
