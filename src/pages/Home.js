import React from "react";
import Header, { Mainlogo } from "../components/Header"; 
import MainImg1 from "../components/mainimg";
import Menu from "../components/menu";


const Home = () => {
  return (
    <div>
      <MainImg1/>
      <Header/>
      <Menu/>
    </div>
  );
};

export default Home;
