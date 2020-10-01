import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../redux/action/authAction";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);

  const login = (email, password) => {
    const user = { mail: email, pass: password };
    dispatch(authAction.login(user));
  };

  if (user.mail && user.pass) {
    history.push(`/`);
  } else {
    console.log(error);
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "70px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Login</h1>
      {user.mail && user.pass && <h2>You have logged in with {user.mail}</h2>}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login(email, password);
        }}
      >
        <Row>
          <Col sm={3} style={{ display: "flex", alignItems: "center" }}>
            Email
          </Col>
          <Col sm={9}>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Row>

        <Row>
          <Col column sm={3} style={{ display: "flex", alignItems: "center" }}>
            Password
          </Col>
          <Col sm={9}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Row>

        <Row>
          <Col
            sm={12}
            style={{
              textAlign: "center ",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Button type="submit">Log In</Button>
          </Col>
        </Row>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
};

export default Login;
