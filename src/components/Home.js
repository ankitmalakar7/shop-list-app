import React from "react";
import AddShop from "./AddShop";
import Navbar from "./Navbar";
import Table from "./Table";

function Home(props) {
  return (
    <>
      <Navbar />
      <AddShop />
      <Table />
    </>
  );
}

export default Home;
