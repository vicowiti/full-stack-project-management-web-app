import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinnerr from "./Spinner";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinnerr />;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      {data.projects.length > 1 ? (
        <div className="row d-flex justify-content-center flex-wrap">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>You dont have any projects yet</p>
      )}
    </div>
  );
};

export default Projects;
