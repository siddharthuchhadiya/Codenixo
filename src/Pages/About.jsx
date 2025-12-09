import React, { useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import {
  Flag,
  Telescope,
  Users,
  BriefcaseBusiness,
  Lightbulb,
  Scale,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const SoftwareDevelopmentRoadmap = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [direction, setDirection] = useState("next");

  const developmentSteps = [
    {
      id: 1,
      number: "01",
      title: "Planning",
      description:
        "We thoroughly analyze requirements, business goals, and technical expectations to build a strong project foundation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      gradient: "from-orange-400 to-orange-500",
      details: [
        "Requirement analysis",
        "Project scoping",
        "Resource planning",
        "Timeline estimation",
      ],
      duration: "1-2 weeks",
    },
    {
      id: 2,
      number: "02",
      title: "Designing",
      description:
        "Our designers craft intuitive UI/UX layouts and system architecture aligned with user behavior and brand identity.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L8.25 21m7.5-4l1.5 4M4.5 3h15L12 14 4.5 3z"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      gradient: "from-purple-400 to-purple-500",
      details: [
        "UI/UX design",
        "Wireframing",
        "Prototyping",
        "System architecture",
      ],
      duration: "2-3 weeks",
    },
    {
      id: 3,
      number: "03",
      title: "Development",
      description:
        "Agile-based coding with robust architecture ensures scalable, secure, and high-performance software.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h11m-6 6h6M5 6h14M5 14h14"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      gradient: "from-blue-400 to-blue-500",
      details: [
        "Frontend development",
        "Backend development",
        "API integration",
        "Database design",
      ],
      duration: "4-8 weeks",
    },
    {
      id: 4,
      number: "04",
      title: "Testing",
      description:
        "Our QA team ensures bug-free delivery through functional, performance, and real-device testing cycles.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m-7 8h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      gradient: "from-green-400 to-green-500",
      details: [
        "Unit testing",
        "Integration testing",
        "Performance testing",
        "Security testing",
      ],
      duration: "1-2 weeks",
    },
    {
      id: 5,
      number: "05",
      title: "Launch",
      description:
        "We deploy the application to secure hosting environments ensuring a seamless production release.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v14m7-7H5"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
      gradient: "from-red-400 to-red-500",
      details: [
        "Deployment",
        "Server configuration",
        "Domain setup",
        "Go-live preparation",
      ],
      duration: "1 week",
    },
    {
      id: 6,
      number: "06",
      title: "Support",
      description:
        "Continuous monitoring, updates, and long-term maintenance keep your software performing at its best.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 4v6h6M6 20v-6H0"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      gradient: "from-indigo-400 to-indigo-500",
      details: [
        "Maintenance",
        "Updates & upgrades",
        "Performance monitoring",
        "Technical support",
      ],
      duration: "Ongoing",
    },
  ];

  const handleNext = () => {
    setDirection("next");
    setActiveStep((prev) => (prev < 6 ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setDirection("prev");
    setActiveStep((prev) => (prev > 1 ? prev - 1 : 6));
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Development Journey
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            A transparent, step-by-step process that transforms your ideas into
            exceptional digital solutions
          </p>
        </div>

        {/* Desktop View - Modern Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="relative z-10 flex justify-between items-center">
              {developmentSteps.map((step) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center"
                >
                  {/* Step circle with gradient */}
                  <button
                    onClick={() => {
                      setDirection(step.id > activeStep ? "next" : "prev");
                      setActiveStep(step.id);
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-lg ${
                      step.color
                    } ${
                      activeStep === step.id
                        ? "ring-4 ring-opacity-30 ring-gray-400 scale-110 shadow-xl"
                        : "scale-100"
                    }`}
                  >
                    {step.number}
                  </button>

                  {/* Step title and duration */}
                  <div className="absolute top-28 text-center w-48">
                    <h3
                      className={`font-bold text-lg transition-colors duration-300 ${
                        activeStep === step.id
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <div
                    className={`absolute top-16 w-0.5 h-12 ${
                      activeStep === step.id
                        ? `bg-gradient-to-b ${step.gradient}`
                        : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            <div
              className={`mt-32 transition-all duration-500 ${
                direction === "next"
                  ? "animate-slideInRight"
                  : "animate-slideInLeft"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div
                  className={`h-2 w-full bg-gradient-to-r ${
                    developmentSteps[activeStep - 1].gradient
                  }`}
                ></div>
                <div className="p-8">
                  <div className="flex items-start">
                    <div
                      className={`${
                        developmentSteps[activeStep - 1].bgColor
                      } rounded-xl p-4 mr-6 ${
                        developmentSteps[activeStep - 1].iconColor
                      }`}
                    >
                      {developmentSteps[activeStep - 1].icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold text-gray-900 mr-4">
                          {developmentSteps[activeStep - 1].number}
                        </span>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {developmentSteps[activeStep - 1].title}
                        </h3>
                        <span className="ml-4 px-4 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                          {developmentSteps[activeStep - 1].duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg mb-8">
                        {developmentSteps[activeStep - 1].description}
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        {developmentSteps[activeStep - 1].details.map(
                          (detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-white transition-colors"
                            >
                              <div
                                className={`w-2 h-2 rounded-full mr-3 ${
                                  developmentSteps[activeStep - 1].color.split(
                                    " "
                                  )[0]
                                }`}
                              ></div>
                              <span className="text-gray-800 font-medium">
                                {detail}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-700 hover:text-gray-900 font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>

                <div className="flex items-center gap-4">
                  <span className="text-gray-500">Step {activeStep} of 6</span>
                  <div className="flex gap-2">
                    {developmentSteps.map((step) => (
                      <button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeStep === step.id
                            ? `${step.color} scale-125`
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-700 hover:text-gray-900 font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-400 to-indigo-400 z-0"></div>

            <div className="space-y-12">
              {developmentSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex items-center transition-all duration-300 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    onClick={() => setActiveStep(step.id)}
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 cursor-pointer transition-all ${
                      step.color
                    } ${
                      activeStep === step.id
                        ? "ring-4 ring-opacity-30 ring-gray-400 scale-110"
                        : ""
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Content card */}
                  <div
                    className={`w-5/12 mx-8 ${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <div
                      onClick={() => setActiveStep(step.id)}
                      className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
                        activeStep === step.id
                          ? "ring-2 ring-gray-300 transform scale-105"
                          : ""
                      }`}
                    >
                      <div className="flex items-start mb-3">
                        <div
                          className={`${step.bgColor} rounded-lg p-3 mr-4 ${step.iconColor}`}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <div className="mt-1 text-sm text-gray-500 font-medium">
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-6">
              {developmentSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`text-lg font-bold ${
                    activeStep === step.id ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {step.number}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Progress
              </span>
              <span className="text-sm font-medium text-gray-900">
                Step {activeStep} of 6
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-indigo-500 transition-all duration-500"
                style={{ width: `${(activeStep / 6) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Carousel view for mobile */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="relative h-[500px]">
              {developmentSteps.map((step) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 p-6 transition-all duration-500 ${
                    activeStep === step.id
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div
                    className={`h-2 w-full rounded-t-2xl ${step.color}`}
                  ></div>
                  <div className="pt-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`${step.bgColor} rounded-xl p-4 mr-4 ${step.iconColor}`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <div className="mt-1 text-sm text-gray-500 font-medium">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8">{step.description}</p>

                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div
                            className={`w-2 h-2 rounded-full mr-3 ${
                              step.color.split(" ")[0]
                            }`}
                          ></div>
                          <span className="text-gray-800 font-medium">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-700 font-medium shadow-md"
            >
              <ChevronLeft size={20} />
              Back
            </button>

            <div className="flex gap-2">
              {developmentSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-3 h-3 rounded-full ${
                    activeStep === step.id
                      ? `${step.color.split(" ")[0]}`
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-700 font-medium shadow-md"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  const [active, setActive] = useState("mission");

  const tabs = [
    { id: "mission", label: "Mission", icon: <Flag size={22} /> },
    { id: "vision", label: "Vision", icon: <Telescope size={22} /> },
    { id: "team", label: "Our Team", icon: <Users size={22} /> },
    {
      id: "culture",
      label: "Work Culture",
      icon: <BriefcaseBusiness size={22} />,
    },
    {
      id: "practice",
      label: "Business Practice",
      icon: <Lightbulb size={22} />,
    },
    { id: "ethics", label: "Work Ethics", icon: <Scale size={22} /> },
  ];

  const content = {
    mission: {
      title: "Mission",
      list: [
        "Enhanced quality in each project by brainstorming innovative ideas.",
        "Quality centric outcomes for SMBs & Brands.",
        "Deliver accurate business products for clients.",
        "Front line in the field of technology & innovation.",
        "Cherish the integrity of our hard work.",
      ],
    },

    vision: {
      title: "Vision",
      list: [
        "To become a trusted global technology partner.",
        "Empowering businesses through innovation and automation.",
        "Delivering long-term scalable digital solutions.",
      ],
    },

    team: {
      title: "Our Team",
      list: [
        "A passionate team of designers, developers and innovators.",
        "Collaborative environment with a growth mindset.",
        "Dedicated experts focused on delivering excellence.",
      ],
    },

    culture: {
      title: "Work Culture",
      list: [
        "Positive and collaborative work environment.",
        "Focus on creativity and problem-solving.",
        "Continuous learning and skill development.",
      ],
    },

    practice: {
      title: "Business Practice",
      list: [
        "Ethical and transparent processes.",
        "Customer-first approach in every decision.",
        "Reliable business standards with timely delivery.",
      ],
    },

    ethics: {
      title: "Work Ethics",
      list: [
        "Respect, integrity, responsibility, and teamwork.",
        "Maintaining professionalism in all operations.",
        "Strong commitment toward customer satisfaction.",
      ],
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-10 pb-0">
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="mb-3">
            <Breadcrumbs />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-md mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            We're dedicated to delivering exceptional digital solutions through
            innovation, transparency, and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
        {/* LEFT SIDEBAR */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`
                  w-full flex items-center gap-3 px-5 py-4 rounded-xl text-left font-medium transition-all
                  ${
                    active === tab.id
                      ? "bg-gradient-to-r from-orange-50 to-purple-50 shadow-xl text-black border border-gray-200"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                <span
                  className={`${
                    active === tab.id
                      ? "text-orange-500"
                      : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            {content[active].title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            We strive for excellence, innovation, and the highest level of
            customer satisfaction.
          </p>

          <ul className="space-y-4">
            {content[active].list.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white transition-colors"
              >
                <div
                  className={`mt-1 h-2 w-2 rounded-full ${
                    i % 3 === 0
                      ? "bg-orange-500"
                      : i % 3 === 1
                      ? "bg-purple-500"
                      : "bg-indigo-500"
                  }`}
                ></div>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Roadmap Section */}
      <SoftwareDevelopmentRoadmap />
    </div>
  );
}
