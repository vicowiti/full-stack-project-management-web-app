import React from "react";
import Button from "react-bootstrap/esm/Button";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "80vh" }}
    >
      <p className="text-center">
        <FaExclamationTriangle size={30} className="text-danger" />
      </p>
      <h1>404</h1>
      <p>Sorry this page does not exist</p>

      <Link to="/">
        <button className=" btn btn-danger">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
