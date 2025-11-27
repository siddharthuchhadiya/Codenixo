import React from "react";
import "../App.css";
export default function FancyHoverCards() {
  const cards = [
    {
      title: "Mountain View",
      copy: "Check out all of these gorgeous mountain trips with beautiful views.",
      button: "View Trips",
      img: "1517021897933-0e0319cfbc28",
    },
    {
      title: "To The Beach",
      copy: "Plan your next beach trip with these fabulous destinations.",
      button: "View Trips",
      img: "1533903345306-15d1c30952de",
    },
    {
      title: "Desert Destinations",
      copy: "It's the desert you’ve always dreamed of.",
      button: "Book Now",
      img: "1545243424-0ce743321e11",
    },
    {
      title: "Explore The Galaxy",
      copy: "Blast off into outer space today.",
      button: "Book Now",
      img: "1531306728370-e2ebd9d7bb99",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c, i) => (
        <Card key={i} card={c} />
      ))}
    </main>
  );
}

function Card({ card }) {
  return (
    <div
      className="group relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg cursor-pointer fancy-card"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&w=800&q=80)`,
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-100 group-hover:opacity-90 transition-all duration-700"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-5 w-full text-center transform translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
        <h2 className="text-white font-bold text-xl mb-3 drop-shadow-md">
          {card.title}
        </h2>

        <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150">
          {card.copy}
        </p>

        <button className="mt-5 px-4 py-2 text-xs font-bold uppercase bg-black text-white rounded shadow hover:bg-neutral-900 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
          {card.button}
        </button>
      </div>
    </div>
  );
}
