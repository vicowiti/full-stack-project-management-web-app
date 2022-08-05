import React from "react";
import Clients from "../components/Clients";
import NewClientModal from "../components/NewClientModal";
import NewProjectModal from "../components/NewProjectModal";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <div className="d-flex mb-4 gap-3">
        <NewClientModal />
        <NewProjectModal />
      </div>
      <Projects />
      <Clients />
    </div>
  );
};

export default Home;
