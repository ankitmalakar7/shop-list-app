import React from "react";
import Navbar from "./Navbar";

function Home(props) {
  return (
    <>
      <Navbar />
      <div className="container">{props.children}</div>
    </>
  );
}

export default Home;
