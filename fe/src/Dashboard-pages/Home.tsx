import React from "react";
import axios from "axios";

interface Props {
  pageOpen: number;
}

const Home = ({ pageOpen }: Props) => {
  if (pageOpen !== 0) {
    return null;
  }
  return (
    <div>
      <h2> </h2>
      <br></br>
      <p>Here you can create your own departments!</p>
    </div>
  );
};

export default Home;
