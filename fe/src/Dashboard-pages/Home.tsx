import React from "react";

interface Props {
  pageOpen: number;
}

const Home = ({ pageOpen }: Props) => {
  if (pageOpen !== 1) {
    return null;
  }
  return <div>Home</div>;
};

export default Home;
