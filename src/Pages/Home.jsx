import { Icon } from "@iconify/react";
import Galaxy from "../Components/Galaxy.jsx";

const skillIcons = [
  { name: "HTML", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Angular", icon: "logos:angular-icon" },
  { name: "Flutter", icon: "logos:flutter" },
  { name: "WordPress", icon: "logos:wordpress-icon" },
  { name: "Shopify", icon: "logos:shopify" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
];

export default function HeroGlobe() {
  const radiusPercent = 49;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Galaxy
        mouseInteraction={true}
        mouseRepulsion={false}
        density={0.3}
        glowIntensity={0.2}
        hueShift={0}
        twinkleIntensity={0.1}
        rotationSpeed={0.05}
        repulsionStrength={1}
        autoCenterRepulsion={0}
        starSpeed={0.1}
        animationspeed={0.4}
      />

      {/* EARTH + RING + ICONS */}
      <div
        className="
          pointer-events-none
          absolute
          z-10
          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          h-[80vw] w-[80vw] max-h-[90vh] max-w-[90vh]
          md:left-auto md:right-[-18%] md:top-1/2
          md:translate-x-0 md:-translate-y-1/2
          md:h-[120vh] md:w-[120vh]
        "
      >
        <div
          className="
            relative h-full w-full
            rounded-full
            border-[2px] md:border-[3px]
            border-sky-400/80
          "
        >
          {/* Earth image */}
          <img
            src="/assets/earth.png"
            alt="Earth"
            className="
              absolute inset-[2px] md:inset-[2px]
              h-auto w-auto
              rounded-full
              object-cover
              spin-slow
            "
          />
          <div className="absolute w-full h-full spin-slow">
            {skillIcons.map((item, index) => {
              const angle = (360 / skillIcons.length) * index;
              const radians = (angle * Math.PI) / 180;
              const left = 50 + radiusPercent * Math.sin(radians);
              const top = 50 - radiusPercent * Math.cos(radians);

              return (
                <div
                  key={item.name}
                  className="absolute"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <div
                    className="
                      flex items-center justify-center
                      rounded-full bg-black/70 backdrop-blur
                      shadow-lg
                      h-8 w-8 md:h-10 md:w-10
                    "
                  >
                    <Icon icon={item.icon} className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
