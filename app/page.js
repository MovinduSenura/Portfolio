"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Download,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  CircleEllipsis,
} from "lucide-react";

const Baumans = localFont({
  src: "./fonts/Baumans-Regular.ttf",
});

const RainDrop = ({ delay, duration, left, length, speed }) => (
  <div
    className="absolute bg-gradient-to-b from-transparent via-blue-200 to-blue-300 opacity-70"
    style={{
      left: `${left}%`,
      width: "2px",
      height: `${length}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      animation: `fall ${duration}s linear infinite`,
      transform: "rotate(15deg)", // More noticeable angle for wind effect
    }}
  />
);

const RainEffect = () => {
  const [rainDrops, setRainDrops] = useState([]);

  useEffect(() => {
    const drops = [];
    for (let i = 0; i < 200; i++) {
      const length = Math.random() * 15 + 10; // Varied raindrop lengths
      const speed = Math.random() * 2 + 2; // Slower, more realistic fall speed
      drops.push({
        id: i,
        delay: Math.random() * 5,
        duration: speed,
        left: Math.random() * 110, // Extend beyond screen for angle
        length: length,
        speed: speed,
      });
    }
    setRainDrops(drops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-120vh) translateX(-10px) rotate(15deg);
            opacity: 0;
          }
          5% {
            opacity: 0.7;
          }
          95% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(120vh) translateX(30px) rotate(15deg);
            opacity: 0;
          }
        }
      `}</style>
      {rainDrops.map((drop) => (
        <RainDrop
          key={drop.id}
          delay={drop.delay}
          duration={drop.duration}
          left={drop.left}
          length={drop.length}
          speed={drop.speed}
        />
      ))}
    </div>
  );
};

export default function RainPortfolio() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-950 to-gray-1000 text-white relative overflow-hidden">
      <RainEffect />

      <div className={`relative z-20 ${Baumans.className}`}>
        {/* <header className="text-left p-4 bg-gray-800 bg-opacity-50">
          <h1 className="text-2xl md:text-2xl font-bold text-blue-100">
            Senura Aluthge
          </h1>
        </header> */}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-100">
            Senura Aluthge
          </h1>
          <p className="text-md md:text-2xl text-blue-200 opacity-80">
            Software Engineering Undergraduate | Junior Software Engineer
          </p>
          <div className="w-24 h-1 bg-gray-700 mx-auto mt-6 rounded"></div>
        </header>

        {/* Download CV Button - ADD THIS */}
        <div className="flex flex-row mt-8 mb-15 text-center justify-center space-x-4">
          <a
            href="https://github.com/MovinduSenura"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent bg-opacity-50 backdrop-blur-md hover:scale-105 transition-transform border border-gray-800 text-white font-medium py-3 px-6 rounded-lg duration-300 flex items-center gap-2 no-underline cursor-pointer"
          >
            <Github size={20} />
            Go to GitHub
          </a>
          <a
            href="/Senura_Aluthge_CV.pdf"
            download="Senura_Aluthge_CV.pdf"
            className="bg-transparent bg-opacity-50 backdrop-blur-md hover:scale-105 transition-transform border border-gray-800 text-white font-medium py-3 px-6 rounded-lg duration-300 flex items-center gap-2 cursor-pointer inline-flex"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        {/* About Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-transparent bg-opacity-50 backdrop-blur-md rounded-lg p-8 border border-gray-800 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-row justify-between">
              <h2 className="text-3xl font-bold mb-3 text-blue-100">
                About Me
              </h2>
              <CircleEllipsis
                size={24}
                className="text-white cursor-pointer"
                onClick={() => {
                  window.location = "/about";
                }}
              />
            </div>
            <p className="text-gray-300 leading-relaxed md:text-lg text-md text-justify">
              I am a fourth-year undergraduate at the Sri Lanka Institute of
              Information Technology, pursuing a BSc in Information Technology
              specializing in Software Engineering. I have a solid programming,
              web development and designing background. I've worked on several
              projects that have improved my cooperation and coding skills. As I
              advance in the field of Software Engineering, I am looking for
              chances to put my expertise to use in practical situations.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        {/* <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-100">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Design",
              "Animation",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <span className="text-blue-200">{skill}</span>
              </div>
            ))}
          </div>
        </section> */}

        {/* Projects Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-100">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              // {
              //   title: "MemeGames.WTF",
              //   description:
              //     "When I was an intern at Nine Hermits Games (Pvt) Ltd, I created the frontend of this gaming platform. It features meme games. This project was a great learning experience for me learm about frontend development and blockchain.",
              //   tech: "React, Vite, JavaScript, Tailwind CSS, API Integration, Supabase",
              //   image: "/memegames.webp",
              // },
              // {
              //   title: "Nine Hermits Games Official Website",
              //   description:
              //     "When I was an intern at Nine Hermits Games (Pvt) Ltd, I created this responsive website for the company. It showcases their work and provides information about the company. Customers contact the company through this website.",
              //   tech: "Webflow",
              //   image: "/9hg.webp",
              // },
              // {
              //   title: "Boomer Brain-Labs",
              //   description:
              //     "When I was an intern at Nine Hermits Games (Pvt) Ltd, I created this responsive website for the company.",
              //   tech: "Webflow",
              //   image: "/bbl.webp",
              // },
              // {
              //   title: "Simple Guys",
              //   description:
              //     "When I was an intern at Nine Hermits Games (Pvt) Ltd, I worked on the frontend of this project.",
              //   tech: "React, Next.js, JavaScript, Tailwind CSS",
              //   image: "/simpleguys.webp",
              // },
              {
                title: "Cafe Management System",
                description:
                  "This project was a group project where I was responsible for the menu management function. It allows users to add, update, and delete menu items. My special feature was to highlight the most ordered item in the menu.",
                tech: "React, JavaScript, Node.js, Express.js, MongoDB",
                image: "/cafe.webp",
              },
              {
                title: "Login / Register",
                description:
                  "This project has a login feature, a register feature and a profile page that displays user information.",
                tech: "React, Vite, JavaScript, Node.js, Express.js, Tailwind CSS, MongoDB",
                image: "/login.webp",
              },
              {
                title: "W - A - S - D",
                description:
                  "This is a PC only game where a music plays and when particular key icon comes to a certain area, user needs to press the exact key or game over.",
                tech: "Construct",
                image: "/wasd.webp",
                link: "https://movindusenura.github.io/W-A-S-D_Construct/",
                linkText: "Play W-A-S-D",
              },
              {
                title: "Planet Explorer",
                description:
                  "This is a PC only game where there is a spaceship which can shoot. Player needs to shoot the planets without getting hit by planets.",
                tech: "Construct",
                image: "/planetexplorer.webp",
                link: "https://movindusenura.github.io/Planet-Explorer_Construct/",
                linkText: "Play Planet Explorer",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-transparent bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300"
              >
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-justify">
                    {project.description}
                  </p>
                  <p className="text-[#6d33cf] mb-4 text-justify underline font-semibold">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkText || "Visit Project"}
                      </a>
                    ) : null}
                  </p>
                  <div className="text-sm text-blue-400">{project.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-transparent bg-opacity-50 backdrop-blur-md rounded-lg p-8 border border-gray-800 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-6 text-blue-100">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-6">
              Let's create something beautiful together, like rain forming
              rivers.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=movindusenuraaluthge@gmail.com"
                className="text-blue-400 hover:scale-125 transition-transform duration-300 p-2"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/senuraaluthge"
                className="text-blue-400 hover:scale-125 transition-transform duration-300 p-2"
                aria-label="Linkedin"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/MovinduSenura"
                className="text-blue-400 hover:scale-125 transition-transform duration-300 p-2"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
              <a
                href="https://twitter.com/SenuraAluthge"
                className="text-blue-400 hover:scale-125 transition-transform duration-300 p-2"
                aria-label="Twitter"
              >
                <Twitter size={24} />
                {/* <Image
                  src="/x.svg"
                  alt="X"
                  width={24}
                  height={24}
                  color="#1DA1F2"
                /> */}
              </a>
              <a
                href="https://www.instagram.com/movindu_senura"
                className="text-blue-400 hover:scale-125 transition-transform duration-300 p-2"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-fit mx-auto text-center">
          <div className="bg-transparent bg-opacity-50 backdrop-blur-sm rounded-lg p-2">
            <h2 className="text-md font-normal text-blue-100">
              © 2025 Senura Aluthge. All Rights Reserved.
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}
