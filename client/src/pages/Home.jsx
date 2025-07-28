import React from "react";
import AddClientModel from "../components/AddClientModel";
import Projects from "../components/Projects";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModel />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
