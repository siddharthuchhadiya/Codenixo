import { Icon } from "@iconify/react";
import Galaxy from "../Components/Galaxy.jsx";

const skillIcons = [
  { name: "HTML", icon: "logos:html-5", position: "top-0 left-1/2 -translate-x-1/2" },
  { name: "CSS", icon: "logos:css-3", position: "top-[12%] right-[12%]" },
  { name: "JavaScript", icon: "logos:javascript", position: "right-0 top-1/2 -translate-y-1/2" },
  { name: "React", icon: "logos:react", position: "bottom-[12%] right-[12%]" },
  { name: "Node.js", icon: "logos:nodejs-icon", position: "bottom-0 left-1/2 -translate-x-1/2" },
  { name: "Angular", icon: "logos:angular-icon", position: "bottom-[12%] left-[12%]" },
  { name: "Flutter", icon: "logos:flutter", position: "left-0 top-1/2 -translate-y-1/2" },
  { name: "WordPress", icon: "logos:wordpress-icon", position: "top-[12%] left-[12%]" },
  { name: "Shopify", icon: "logos:shopify", position: "top-[25%] left-[50%]" },
  { name: "MongoDB", icon: "logos:mongodb-icon", position: "top-[25%] right-[50%]" },
];


export default function HeroGlobe() {
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

          /* Mobile & tablet → centered full circle */
          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          h-[80vw] w-[80vw] max-h-[90vh] max-w-[90vh]

          /* Desktop → big circle, half on right */
          md:left-auto md:right-[-18%] md:top-1/2
          md:translate-x-0 md:-translate-y-1/2
          md:h-[120vh] md:w-[120vh]
        "
      >
        {/* Ring container */}
        <div
          className="
            relative h-full w-full
            rounded-full
            border-[2px] md:border-[3px]
            border-sky-400/80
          "
        >
          {/* Earth image with small gap inside the ring */}
          <img
            src="/assets/earth.png"
            alt="Earth"
            className="
              absolute
              inset-[2px] md:inset-[2px]    /* gap: 2px mobile, 3px desktop */
              h-auto w-auto
              rounded-full
              object-cover
              spin-slow
            "
          />

          <div className="absolute w-full h-full spin-slow">
            {/* Skill icons around the ring */}
          {skillIcons.map((item) => (
            <div
              key={item.name}
              className={`
                absolute
                ${item.position}}
              `}
            >
              <div
                className="
                  flex items-center justify-center
                  rounded-full bg-black/70 backdrop-blur
                  shadow-lg
                  h-8 w-8 md:h-10 md:w-10
                "
              >
                <Icon
                  icon={item.icon}
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
