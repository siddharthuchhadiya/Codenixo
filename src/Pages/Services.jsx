import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import ParallaxCards from "../Components/ParallaxCards";

export default function Services() {
  return (
    <>  
    <div
      className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('/public/assets/rm373batch2-09.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="mb-3">
          <Breadcrumbs />
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold text-white drop-shadow-md">
          Services
        </h1>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-12">
      <ParallaxCards />
    </div>
    </>
  );
}
