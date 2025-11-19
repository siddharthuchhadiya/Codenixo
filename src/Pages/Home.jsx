import React from "react";
import { Globe } from "../Components/Globe.jsx";
import Galaxy from "../Components/Galaxy.jsx";

export default function Home() {
  return (

    <div className="relative h-screen w-full overflow-hidden">
      <Galaxy
      mouseInteraction={false}
      mouserepulsion={false}
      density={1.2}
      glowIntensity={0.2}
      saturation={0}
      hueShift={40}
      twinkleIntensity={0.1}
      rotationSpeed={0.05}
      repulsionStrength={0}
      autoCenterRepulsion={1}
      starSpeed={0.2}
      animationspeed={0.2}
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
        <Globe/>
      </div>
    </div>


  );
}
