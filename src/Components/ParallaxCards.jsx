import { Link } from "react-router-dom";
import "../App.css";

export default function ServiceGlowGrid() {
  const services = [
    {
      img: "/public/assets/front-end-programming 1.png",
      title: "Web Designing",
      desc: "Creative, responsive and modern website designs focused on UX.",
      path: "/services/webdesigning",
    },
    {
      img: "/public/assets/app-development 1.png",
      title: "Web Development",
      desc: "High-performance websites using modern frameworks and clean code.",
      path: "/services/webdevelopment",
    },
    {
      img: "/public/assets/app 1.png",
      title: "Mobile Application Development",
      desc: "Powerful, smooth Android & iOS mobile applications.",
      path: "/services/mobiledevelopment",
    },
    {
      img: "/public/assets/design 1.png",
      title: "UI/UX Design",
      desc: "User-centered interfaces with modern layouts and seamless flow.",
      path: "/services/uiuxdesign",
    },
    {
      img: "/public/assets/graphic-design 1.png",
      title: "Graphics Design",
      desc: "Logos, banners, branding, and creative social media graphics.",
      path: "/services/graphicsdesign",
    },
    {
      img: "/public/assets/custom 1.png",
      title: "Custom Software Development",
      desc: "Fully tailored business automation and custom software systems.",
      path: "/services/customdevelopment",
    },
    {
      img: "/public/assets/wordpress 1.png",
      title: "WordPress Development",
      desc: "Custom WordPress websites, themes, plugins and full CMS setup.",
      path: "/services/wordpressdevelopment",
    },
    {
      img: "/public/assets/ecommerce 1.png",
      title: "Shopify Development",
      desc: "Shopify store creation, theme customization and app integrations.",
      path: "/services/shopifydevelopment",
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

function GlowCard({ img, title, desc, path }) {
  return (
    <div
      className="
        relative w-full h-[380px] bg-[#171717]
        flex justify-center items-center overflow-hidden cursor-pointer
        shadow-[0_0_8px_1px_#00000099] rounded-xl
        border border-[#2b2b2b] group
      "
    >
      <div
        className="
          absolute w-[130px] h-[550px]
          bg-[linear-gradient(#ff2288,#387ef0)]
          opacity-0 group-hover:opacity-100
          animate-[spin_8s_linear_infinite]
          transition-opacity duration-300
        "
      />

      <div className="absolute w-full h-full bg-[#17171770] backdrop-blur-[45px]" />

      <div
        className="
          relative z-10 w-[95%] h-[95%] bg-[#171717]
          rounded-xl flex flex-col justify-center items-center
          text-white p-5 text-center
        "
      >
        <div className="absolute w-[8px] h-[70px] bg-white blur-[55px] opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* ---------- IMAGE ---------- */}
        <div className="mb-5 scale-100 group-hover:scale-110 transition-all duration-300">
          <img
            src={img}
            alt={title}
            className="w-[80px] h-[80px] object-contain"
          />
        </div>

        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="text-sm text-gray-300 mt-3 px-4 leading-relaxed">
          {desc}
        </p>

        <Link to={path}>
          <button className="ui-button mt-6" style={{ "--clr": "#7808d0" }}>
            <span className="ui-button-icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                className="ui-button-icon"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                className="ui-button-icon ui-button-icon-copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
