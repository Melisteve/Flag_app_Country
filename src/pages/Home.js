import React from "react";
import Countries from "../component/Countries";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>ACCUEIL</h1>
      <Countries />
    </div>
  );
};

export default Home;
