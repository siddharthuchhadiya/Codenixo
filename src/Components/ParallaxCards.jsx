// ==========================
// SVG ICONS (White → Sky on Hover)
// ==========================

const WebDesignIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M3 4h18v2H3V4zm0 4h18v12H3V8zm2 2v8h14v-8H5z" />
  </svg>
);

const WebDevIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M8 17l-5-5 5-5 1.5 1.5L6 12l3.5 3.5L8 17zm8-10l5 5-5 5-1.5-1.5L18 12l-3.5-3.5L16 7z" />
  </svg>
);

const AppDevIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h10V4H7z" />
  </svg>
);

const WordPressIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm5.3,17.2-2.2-6.3,1.5-3.6A7.1,7.1,0,0,1,17.3,12,7,7,0,0,1,17.3,17.2Zm-4-1.7L10.6,6.5l1.8-.1a7.1,7.1,0,0,1,1.4,0l1.2,3.4Zm-2.8,1.8L7.3,8.4A7,7,0,0,1,9.7,6.3Z" />
  </svg>
);

const ShopifyIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M3 6l9-4 9 4v12l-9 4-9-4V6zm9 2L6 7v9l6 3 6-3V7l-6 1z" />
  </svg>
);

const SeoIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M12 2a10 10 0 00-3 19.5v-2.1a8 8 0 114.1-.1v2.2A10 10 0 0012 2z" />
  </svg>
);

const SoftwareIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M3 3h18v6H3V3zm0 8h8v10H3V11zm10 0h8v10h-8V11z" />
  </svg>
);

const UiUxIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
  </svg>
);

const DesignIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 24 24"
    className="text-white transition-all duration-300 group-hover:text-sky-400"
    fill="currentColor"
  >
    <path d="M12 2l4 4-4 4-4-4 4-4zm0 6l4 4-4 4-4-4 4-4zm0 6l4 4-4 4-4-4 4-4z" />
  </svg>
);

// ==========================
// MAIN GRID COMPONENT
// ==========================

export default function ServiceGlowGrid() {
  const services = [
    {
      icon: <WebDesignIcon />,
      title: "Web Designing",
      desc: "Creative layouts, premium UI structure and stunning web experiences.",
    },
    {
      icon: <WebDevIcon />,
      title: "Web Development",
      desc: "Secure, optimized, responsive websites built with modern technologies.",
    },
    {
      icon: <AppDevIcon />,
      title: "Mobile App Development",
      desc: "High-performance Android & iOS applications with smooth UI.",
    },
    {
      icon: <WordPressIcon />,
      title: "WordPress Development",
      desc: "Custom themes, plugins and full WordPress website solutions.",
    },
    {
      icon: <ShopifyIcon />,
      title: "Shopify Development",
      desc: "Ecommerce store setup, customization & app integrations.",
    },
    {
      icon: <SeoIcon />,
      title: "SEO Optimization",
      desc: "Increase ranking, traffic and brand visibility organically.",
    },
    {
      icon: <SoftwareIcon />,
      title: "Custom Software",
      desc: "Business automation software designed for scalability.",
    },
    {
      icon: <UiUxIcon />,
      title: "UI/UX Design",
      desc: "Modern, user-centered digital experiences & prototypes.",
    },
    {
      icon: <DesignIcon />,
      title: "Graphic Designing",
      desc: "Brand identity, digital ads, posters and creative visuals.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {services.map((s, i) => (
        <GlowCard key={i} {...s} />
      ))}
    </div>
  );
}

// ===========================
// CARD COMPONENT
// ===========================

function GlowCard({ icon, title, desc }) {
  return (
    <div
      className="
        relative w-full h-[380px] bg-[#171717]
        flex justify-center items-center overflow-hidden cursor-pointer 
        shadow-[0_0_8px_1px_#00000099] rounded-xl 
        border border-[#2b2b2b] group
      "
    >
      {/* Rotating Glow Border */}
      <div
        className="
          absolute w-[130px] h-[550px] 
          bg-[linear-gradient(#ff2288,#387ef0)]
          opacity-0 group-hover:opacity-100 
          animate-[spin_8s_linear_infinite] 
          transition-opacity duration-300
        "
      />

      {/* Blur Overlay */}
      <div className="absolute w-full h-full bg-[#17171770] backdrop-blur-[45px]" />

      {/* Card Content */}
      <div
        className="
          relative z-10 w-[95%] h-[95%] bg-[#171717]
          rounded-xl flex flex-col justify-center items-center
          text-white p-5 text-center
        "
      >
        {/* Shine Effect */}
        <div
          className="
            absolute w-[8px] h-[70px] bg-white blur-[55px] 
            opacity-0 group-hover:opacity-100 transition duration-300
          "
        />

        {/* Icon */}
        <div className="mb-5 scale-100 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-300 mt-3 px-4 leading-relaxed">{desc}</p>

        {/* Button */}
        <button
          className="
            mt-6 px-6 py-2 text-sm font-medium rounded-md 
            bg-sky-600 hover:bg-sky-700 transition
          "
        >
          Read More
        </button>
      </div>
    </div>
  );
}
