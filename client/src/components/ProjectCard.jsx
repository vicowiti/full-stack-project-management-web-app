import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ project }) => {
  let bgColor;

  if (project.status === "Completed") {
    bgColor = "green";
  } else if (project.status === "Not Started") {
    bgColor = "red";
  } else if (project.status === "In Progress") {
    bgColor = "yellow";
  }

  return (
    <Card className="col-md-3 m-2 ">
      <Card.Header className="d-flex justify-content-between">
        <h3>{project.name}</h3>
        <button className="btn btn-light">View</button>
      </Card.Header>
      <Card.Body className="d-flex gap-2">
        <h6>Status: {project.status}</h6>
        <div
          className=" rounded-circle"
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: bgColor,
          }}
        ></div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
