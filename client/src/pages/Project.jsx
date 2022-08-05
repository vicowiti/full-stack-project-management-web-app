import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ClientInfo from "../components/ClientInfo";
import Spinnerr from "../components/Spinner";
import { GET_PROJECT } from "../queries/projectQueries";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  if (loading) return <Spinnerr />;
  if (error) return <p className="text-bg-danger">Something went wrong</p>;

  if (data) {
    const { project } = data;

    return (
      <>
        <div className="mx-auto card p-5 w-75 mt-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{project.status}</p>
          <ClientInfo client={project.client} />
        </div>
      </>
    );
  }
};

export default Project;
