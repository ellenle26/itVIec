import React from "react";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ErrorPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "70px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Alert variant="danger">Error 404! Page not found.</Alert>
    </div>
  );
};

export default ErrorPage;
