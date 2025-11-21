// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import createGlobe from "cobe";
// import { useMediaQuery } from "../Hooks/use-media-query";

// function isWebGLAvailable() {
//   if (typeof document === "undefined") return false;
//   const canvas = document.createElement("canvas");
//   const gl =
//     canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
//   return !!gl;
// }

// export function Globe({ size = "auto" }) {
//   const canvasRef = useRef(null);
//   const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
//   const [disabledWebGL, setDisabledWebGL] = useState(false);
//   const [globeSize, setGlobeSize] = useState(800);

//   const updateSize = useCallback(() => {
//     if (typeof window === "undefined") return;

//     if (size !== "auto") {
//       setGlobeSize(size);
//       return;
//     }

//     const dynamicSize = Math.min(700, window.innerWidth * 0.8);
//     setGlobeSize(dynamicSize);
//   }, [size]);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     window.addEventListener("resize", updateSize);

//     return () => window.removeEventListener("resize", updateSize);
//   }, [updateSize]);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     if (!isWebGLAvailable()) {
//       requestAnimationFrame(() => setDisabledWebGL(true));
//       return;
//     }

//     let phi = 0;

//     const globe = createGlobe(canvasRef.current, {
//       devicePixelRatio: 2,
//       width: globeSize * 2,
//       height: globeSize * 2,
//       phi: 0,
//       theta: 0,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 16000,
//       mapBrightness: 6,

//       baseColor: [0.15, 0.15, 0.2],
//       markerColor: [1, 1, 1],
//       glowColor: [1, 1, 1],

//       markers: [
//         { location: [52.3676, 4.9041], size: 0.05 },
//         { location: [39.0438, -77.4874], size: 0.05 },
//         { location: [-26.2041, 28.0473], size: 0.05 },
//         { location: [22.3193, 114.1694], size: 0.05 },
//         { location: [-33.8688, 151.2093], size: 0.05 },
//         { location: [-23.5558, -46.6396], size: 0.05 },
//       ],

//       onRender: (state) => {
//         if (!prefersReducedMotion) {
//           state.phi = phi;
//           phi += 0.003;
//         }
//       },
//     });

//     setTimeout(() => {
//       if (canvasRef.current) canvasRef.current.style.opacity = "1";
//     }, 200);

//     return () => globe.destroy();
//   }, [globeSize, prefersReducedMotion]);

//   if (disabledWebGL) {
//     return (
//       <div className="flex justify-center">
//         <p className="text-sm text-gray-400">
//           <b>Hint:</b> Enable WebGL to render the globe.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center">
//       <canvas
//         ref={canvasRef}
//         style={{
//           width: globeSize,
//           height: globeSize,
//           maxWidth: "100%",
//           aspectRatio: 1,
//           opacity: 0,
//           transition: "opacity 1s ease",
//         }}
//       />
//     </div>
//   );
// }
