import React, { useMemo } from "react";
import { Globe } from "../Components/Globe.jsx";
import Galaxy from "../Components/Galaxy.jsx";
import { FaHtml5, FaNode, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { useMediaQuery } from "../Hooks/use-media-query.jsx";

export default function Home() {
  // Responsive icon sizing using media queries
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const iconSize = useMemo(() => {
    if (isMobile) return 32; // Mobile
    if (isTablet) return 42; // Small tablets
    if (isDesktop) return 56; // Desktop
    return 50; // Default (768-1023px)
  }, [isMobile, isTablet, isDesktop]);

  // Icon configuration with consistent angles (60 degrees apart for 6 icons)
  const icons = [
    { Icon: FaReact, angle: -90, label: "React" }, // Top
    { Icon: SiJavascript, angle: -30, label: "JavaScript" }, // Top Right
    { Icon: FaNode, angle: 30, label: "Node" }, // Bottom Right
    { Icon: FaHtml5, angle: 90, label: "HTML" }, // Bottom
    { Icon: SiMongodb, angle: 150, label: "MongoDB" }, // Bottom Left
    { Icon: FaCss3Alt, angle: -150, label: "CSS" }, // Top Left
  ];

  // Calculate icon position based on angle
  const getIconPosition = (angle) => {
    const radius = 50; // 50% from center (on the circle border)
    const angleInRadians = (angle * Math.PI) / 180;
    const x = 50 + radius * Math.cos(angleInRadians);
    const y = 50 + radius * Math.sin(angleInRadians);
    return { x, y };
  };

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
        <Globe />
        <div className="absolute w-[80%] sm:w-2/5 h-[70%] sm:h-[80%] border rounded-full spinner">
          <div className="relative w-full h-full flex justify-center items-center">
            {icons.map(({ Icon, angle, label }) => {
              const { x, y } = getIconPosition(angle);
              return (
                <Icon
                  key={label}
                  size={iconSize}
                  className="absolute skill-icon text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  aria-label={label}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
