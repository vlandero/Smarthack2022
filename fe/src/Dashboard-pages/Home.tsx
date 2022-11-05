import React from "react";

interface Props {
  pageOpen: number;
}

const Home = ({ pageOpen }: Props) => {
  if (pageOpen !== 0) {
    return null;
  }
  return (
    <div>
      <h1> Welcome to Home Page!</h1>
      <br></br>
      <p>Here you can create your own departments!</p>
    </div>
  );
};

export default Home;
