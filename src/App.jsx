import { useState } from "react";
import "./App.scss";
import MainSection from "./components/Info/Info";
import Statistics from "./components/Statistics/Statistics";
import Shorten from "./components/Shorten/Shorten";
import Boost from "./components/Boost/Boost";

const App = () => {
  return (
    <>
      <MainSection />
      <Shorten />
      <Statistics />
      <Boost />
    </>
  );
};

export default App;
