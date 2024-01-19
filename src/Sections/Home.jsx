import React from "react";
import web from "../../src/images/img2.jpg";
import { NavLink } from "react-router-dom";
import Common from "../Commonfile/Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
