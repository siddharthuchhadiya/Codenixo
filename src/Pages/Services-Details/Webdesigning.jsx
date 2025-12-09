import React from "react";

export default function Webdesigning() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Designing
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transforming ideas into beautiful, functional websites that drive
            results and elevate your online presence.
          </p>
        </div>

        {/* Responsive Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — DETAILS SECTION */}
          <div className="space-y-12 text-gray-300 leading-relaxed order-2 lg:order-1">
            {/* Overview */}
            <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Professional Web Designing
              </h2>
              <p className="text-gray-300 text-lg">
                We design modern, responsive, and user-focused websites that
                blend aesthetics with performance. Every design is crafted with
                clean layouts, intuitive navigation, and high-quality visuals to
                ensure your brand stands out and delivers a seamless user
                experience.
              </p>
            </section>

            {/* Responsive Web Design */}
            <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Responsive Web Design
              </h2>
              <p className="text-gray-300 text-lg">
                Responsive Web Design ensures your website adapts to all screen
                sizes— mobiles, tablets, laptops, and desktops. With flexible
                grids, scalable images, and clean CSS, your website always
                delivers a smooth and optimized browsing experience.
              </p>
            </section>

            {/* Single Page Design */}
            <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Single Page Website Design
              </h2>
              <p className="text-gray-300 text-lg">
                Single-page websites offer a clean, fast, and modern browsing
                experience ideal for startups, portfolios, and creative
                businesses. We design smooth scrolling sections with animations
                and strong call-to-actions for high engagement.
              </p>
            </section>

            {/* Enterprise Web Design */}
            <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Enterprise Web Design
              </h2>
              <p className="text-gray-300 text-lg">
                Enterprise-level websites require scalability and strong brand
                presence. We develop multi-page, structured websites with
                service modules, product pages, dashboards, and powerful UI
                components suitable for growing businesses.
              </p>
            </section>

            {/* Additional Services */}
            <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Additional Web Design Services
              </h2>

              <ul className="list-disc ml-6 text-lg space-y-3 text-gray-300">
                <li>Landing Page & Marketing Page Design</li>
                <li>E-commerce Storefront Design</li>
                <li>Portfolio & Personal Branding Websites</li>
                <li>Corporate Website Design</li>
                <li>Custom UI/UX Wireframes & Prototypes</li>
                <li>Admin Dashboard & Web App UI Design</li>
                <li>Website Redesign / Modernization</li>
              </ul>
            </section>

            <button
              className="
        relative px-6 py-3 text-[1.1rem] font-bold text-white
        bg-gradient-to-b from-[#171717] to-[#242424]
        rounded-full cursor-pointer inline-flex items-center justify-center
        border border-[#292929]
        shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)]
        transition-all duration-200 ease-linear
        active:translate-y-[2px]
        active:shadow-[0_1px_2px_rgba(0,0,0,1),0_5px_10px_rgba(0,0,0,0.4)]
        group
      "
            >
              {/* OUTER GRADIENT BORDER */}
              <span
                className="
          absolute -top-[2px] -right-[1px] -bottom-[1px] -left-[1px]
          rounded-full
          bg-gradient-to-b from-[#292929] to-[#000000]
          -z-[1] opacity-100 transition-all
        "
              ></span>
              Contact Us
              {/* INNER ROUND BUTTON */}
              <div
                className="
          relative ml-3 w-[40px] h-[40px] rounded-full flex items-center justify-center
          bg-gradient-to-b from-[#171717] to-[#242424]
          border border-[#252525]
          shadow-[0_0_1px_rgba(0,0,0,1)]
          transition-all duration-200 ease-linear
        "
              >
                {/* INNER CIRCLE BORDER */}
                <span
                  className="
            absolute -top-[2px] -right-[1px] -bottom-[1px] -left-[1px]
            rounded-full
            bg-gradient-to-b from-[#292929] to-[#000000]
            -z-[1] opacity-100 transition-all
          "
                ></span>

                {/* ICON */}
                <svg
                  className="
            w-[28px] h-[28px] icon
            transition-all duration-400 ease-in-out
            filter drop-shadow-[0_10px_20px_rgba(26,25,25,0.9)]
                   drop-shadow-[0_0_4px_rgba(0,0,0,1)]
            group-hover:drop-shadow-[0_10px_20px_rgba(50,50,50,1)]
            group-hover:drop-shadow-[0_0_20px_rgba(2,2,2,1)]
            group-hover:rotate-[-35deg]
          "
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="arrowGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop stopColor="#ffffff" offset="0%" />
                      <stop stopColor="#aaaaaa" offset="100%" />
                    </linearGradient>
                  </defs>

                  <path
                    fill="url(#arrowGradient)"
                    d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>

          {/* RIGHT — IMAGE SECTION */}
          <div className="w-full flex justify-center items-start order-1 lg:order-2">
            <img
              src="/public/assets/web design details 1.jpg"
              alt="Web Design"
              className="rounded-xl shadow-xl w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
