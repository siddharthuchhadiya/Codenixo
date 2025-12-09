import React from "react";

export default function Graphicsdesign() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Graphics{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Design
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Crafting visually appealing, branded, and creative graphic solutions 
          that make your brand stand out and leave a lasting impression.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT — DETAILS SECTION */}
        <div className="space-y-12 text-gray-300 leading-relaxed order-2 lg:order-1">

          {/* CARD 1 */}
          <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Logo & Brand Identity Design
            </h2>
            <p className="text-gray-300 text-lg">
              We create meaningful logo designs and complete brand identity kits 
              that represent your vision and connect with your target audience. 
              From minimal to premium, we bring your brand to life.
            </p>
          </section>

          {/* CARD 2 */}
          <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Social Media Design
            </h2>
            <p className="text-gray-300 text-lg">
              High-quality posts, banners, reels, thumbnails, and advertisements 
              designed to boost engagement and maintain a consistent brand presence 
              across all platforms.
            </p>
          </section>

          {/* CARD 3 */}
          <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Print & Marketing Materials
            </h2>
            <p className="text-gray-300 text-lg">
              Professional designs for brochures, flyers, posters, business cards, 
              packaging, menus, and corporate stationery—ready for print and production.
            </p>
          </section>

          {/* CARD 4 */}
          <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">
              UI Assets & Illustrations
            </h2>
            <p className="text-gray-300 text-lg">
              Custom icons, vector illustrations, UI components, and digital art 
              crafted to enhance websites, apps, and marketing campaigns.
            </p>
          </section>

          {/* CARD 5 */}
          <section className="bg-[#111111] p-8 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Additional Graphic Design Services
            </h2>

            <ul className="list-disc ml-6 text-lg space-y-3 text-gray-300">
              <li>Banner & Poster Design</li>
              <li>Business Card Design</li>
              <li>Brand Guidelines & Style Kits</li>
              <li>Infographics & Presentation Design</li>
              <li>Product Label & Packaging Design</li>
              <li>Advertisement Creatives</li>
              <li>Custom Digital Artwork</li>
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

        {/* RIGHT — IMAGE */}
        <div className="w-full flex justify-center items-start order-1 lg:order-2">
          <img
            src="/public/assets/graphics details.jpg"
            alt="Graphics Design"
            className="rounded-xl shadow-xl w-full max-w-xl object-cover"
          />
        </div>

      </div>
    </div>
  );
}
