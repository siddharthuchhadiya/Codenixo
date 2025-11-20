import React, { useMemo, useState, useEffect } from "react";
import { Globe } from "../Components/Globe.jsx";
import Galaxy from "../Components/Galaxy.jsx";

import { Icon } from "@iconify/react";

import { useMediaQuery } from "../Hooks/use-media-query.jsx";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [globeSize, setGlobeSize] = useState(700);

  useEffect(() => {
    const updateSize = () => {
      if (typeof window === "undefined") return;
      const dynamicSize = Math.min(700, window.innerWidth * 0.8);
      setGlobeSize(dynamicSize);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const iconSize = useMemo(() => {
    if (isMobile) return 25;
    if (isTablet) return 30;
    if (isDesktop) return 35;
    return 24;
  }, [isMobile, isTablet, isDesktop]);

  const ringSize = useMemo(() => {
    const padding = isMobile ? 60 : isTablet ? 80 : 100;
    return globeSize + padding;
  }, [globeSize, isMobile, isTablet]);

  const icons = [
    {
      iconName: "logos:angular-icon",
      angle: 0,
      label: "Angular",
    },
    {
      iconName: "logos:html-5",
      angle: 40,
      label: "HTML5",
    },
    {
      iconName: "logos:css-3",
      angle: 80,
      label: "CSS3",
    },
    {
      iconName: "logos:javascript",
      angle: 120,
      label: "JavaScript",
    },
    {
      iconName: "logos:react",
      angle: 160,
      label: "React",
    },
    {
      iconName: "logos:tailwindcss-icon",
      angle: 200,
      label: "Tailwind CSS",
    },
    {
      iconName: "logos:nextjs-icon",
      angle: 240,
      label: "Next.js",
    },
    {
      iconName: "logos:nodejs-icon",
      angle: 280,
      label: "Node.js",
    },
    {
      iconName: "logos:wordpress-icon",
      angle: 320,
      label: "WordPress",
    },
  ];

  const getPosition = (angle) => {
    const r = 50;
    const rad = (angle * Math.PI) / 180;
    return {
      x: 50 + r * Math.cos(rad),
      y: 50 + r * Math.sin(rad),
    };
  };

  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
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
        starSpeed={0.2}
        animationspeed={0.4}
      />

      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="relative flex items-center justify-center">
          <Globe />

          <div
            className="absolute rounded-full border-2 border-white/20 spin-slow"
            style={{
              width: `${ringSize}px`,
              height: `${ringSize}px`,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="relative w-full h-full">
              {icons.map(({ iconName, angle, label }) => {
                const { x, y } = getPosition(angle);
                return (
                  <div
                    key={label}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    aria-label={label}
                  >
                    <Icon icon={iconName} width={iconSize} height={iconSize} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .spin-slow {
          animation: spin 40s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .skill-icon-container {
          transition: transform 0.3s ease;
        }

        .skill-icon-container:hover {
          z-index: 20;
        }

        @media (max-width: 640px) {
          .spin-slow {
            animation-duration: 50s;
          }
        }
      `}</style>

    </div>


    <div>
      section under construction
    </div>

    <div>
      section under construction
    </div>
    </>

    
  );
}
