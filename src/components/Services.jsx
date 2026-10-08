import { useState } from "react";
import ServiceCard from "./ServiceCard";
import app from "../assets/app.jpg";
import make from "../assets/make.png";
import cafe from "../assets/cafe.jpg";
import image from "../assets/image.jpeg";
import nails from "../assets/nails.jpg";
import digital from "../assets/digital.jpg";
import Header from "./Header";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  const sections = [
    { title: "Web Development" },
    { title: "Mobile Development" },
    { title: "Automated Workflows" },
  ];
  const servicesByCategory = {
    "Web Development": [
      {
        title: "Responsive Websites",
        description:
          "Fast, accessible websites designed to work beautifully across screen sizes.",
        image: cafe,
        link: "https://cafe-website-three-pearl.vercel.app",
      },
      {
        title: "Frontend Applications",
        description:
          "Interactive web experiences built around clear, intuitive user journeys.",
        image: digital,
        link: "https://digital-marketing-landing-page-red.vercel.app",
      },
      {
        title: "Website Integrations",
        description:
          "Reliable connections between your website, APIs, and essential services.",
        image: nails,
        link: "https://hema-artistry.vercel.app/",
      },
    ],
    "Mobile Development": [
      {
        title: "Cross-Platform Apps",
        description:
          "Mobile applications that deliver a consistent experience on iOS and Android.",
        image: app,
        link: "",
      },
      {
        title: "Mobile Interfaces",
        description:
          "Touch-friendly screens with simple navigation and thoughtful details.",
        image: app,
        link: "",
      },
      {
        title: "App Prototypes",
        description:
          "Clickable prototypes to explore and validate an app idea before development.",
        image: app,
        link: "",
      },
    ],
    "Automated Workflows": [
      {
        title: "AI-Powered Automation",
        description:
          "Streamline repetitive tasks with intelligent automation solutions.",
        image: make,
        link: "",
      },
      {
        title: "Interface Design",
        description:
          "Polished, accessible screens that bring product ideas to life.",
        image: make,
        link: "",
      },
      {
        title: "Design Systems",
        description:
          "Reusable components and patterns for a cohesive product experience.",
        image: make,
        link: "",
      },
    ],
  };
  const [selectedCategory, setSelectedCategory] = useState(sections[0].title);

  return (
    <>
      <Header text="My Works" id="services" />
      <div className="mt-8 mb-8 flex flex-wrap justify-center gap-4">
        {sections.map((section) => (
          <button
            type="button"
            key={section.title}
            aria-pressed={selectedCategory === section.title}
            onClick={() => setSelectedCategory(section.title)}
            className={`mt-4 rounded-full border-2 px-6 py-2 font-semibold shadow-sm transition-all duration-300 hover:translate-y-1 hover:text-blue ${selectedCategory === section.title ? "border-pink-400 bg-pink-100" : "border-pink-300 bg-transparent"}`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-8 mb-8 gap-8">
        {servicesByCategory[selectedCategory].map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
            icon={<FaArrowRight className="inline ml-1" />}
          />
        ))}
      </div>
    </>
  );
}
