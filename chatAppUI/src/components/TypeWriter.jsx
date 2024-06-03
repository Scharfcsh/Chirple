import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

function TypeWriter() {
    let navigate = useNavigate();
    const routeChange = () => {
      let path = `/login`;
      navigate(path);
    };
  return (
    <div  className="text-xs flex-col sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold text-white">
      <TypeAnimation
        sequence={[
        
          "We produce food for Mice",
          1000,
          "We produce  for Hamsters",
        //   1000,
        //   "We produce food for Guinea Pigs",
        //   1000,
        //   "We produce food for Chinchillas",
        //   1000,
        ]}
        wrapper="span"
        speed={200}
        
        repeat={Infinity}
      />

      <button onClick={routeChange}> click me</button>
      {/* <button>click </button> */}
    </div>
  );
}

export default TypeWriter;
