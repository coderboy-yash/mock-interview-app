// import React from "react";

import Hero from "./../components/Hero";
import Illustration from "./../components/Illustration";
import Description from "./../components/Description";

const Home = () => {
  return (
    <div className="overflow-hidden mb-32 ">
      <Hero></Hero>
      <Illustration></Illustration>
      <Description></Description>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
