"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircleAlert, ArrowLeftCircle } from "lucide-react";

const Baumans = localFont({
  src: "../fonts/Baumans-Regular.ttf",
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
  const [currentPage, setCurrentPage] = useState("");

  // Define the navigation flow
  const pageFlow = {
    back: {
      "about": "/"
    }
  };

    // Get current page from window location
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname) {
      // Extract page name from pathname
      const pageName = pathname.replace("/", "");
      setCurrentPage(pageName);
    }
  }, []);

  const handleBack = () => {
    const backPage = pageFlow.back[currentPage];
    if (backPage) {
      window.location = `${backPage}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-950 to-gray-1000 text-white relative overflow-hidden">
      <RainEffect />

      <div className={`relative z-20 ${Baumans.className}`} />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-transparent bg-opacity-50 backdrop-blur-md rounded-lg p-8 border border-gray-800 hover:scale-105 transition-transform duration-300">
            <ArrowLeftCircle size={24} onClick={handleBack} className="cursor-pointer md:hidden mb-5" />
            <div className="flex flex-col items-start gap-8">
              <div className="flex justify-between w-full">
                <div>
                  <Image
                    src="/me2.webp"
                    alt="Me"
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <ArrowLeftCircle size={24} onClick={handleBack} className="cursor-pointer hidden md:block" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <CircleAlert size={24} />
                  <h2 className="text-2xl font-bold text-blue-100">
                    Who I am?
                  </h2>
                </div>
                <p className="text-amber-400 leading-relaxed md:text-lg text-md text-justify font-bold">
                  HI! I'M SENURA ALUTHGE
                </p>
                <p className="text-blue-100 leading-relaxed md:text-lg text-md text-justify font-normal">
                  I'm a junior software engineer with a passion for full-stack
                  development and creative technology. I specialize in building
                  complete web applications while bringing a designer's eye to
                  user experience. My work combines technical problem-solving
                  with creative thinking, whether I'm developing robust backend
                  systems or crafting intuitive user interfaces.
                </p>
                <p className="text-blue-100 leading-relaxed md:text-lg text-md text-justify font-bold mt-4 mb-1">
                  CORE EXPERTISE
                </p>
                <p className="text-blue-100 leading-relaxed md:text-lg text-md text-justify font-normal mb-2">
                  <clr className="text-amber-400 font-bold">
                    Full-Stack Development:
                  </clr>{" "}
                  Building complete web applications using modern technologies
                  like React, Vite, Next.js, and the MERN stack, with experience
                  in cloud databases including Supabase and Firebase for
                  scalable backend solutions.
                </p>
                <p className="text-blue-100 leading-relaxed md:text-lg text-md text-justify font-normal mb-2">
                  <clr className="text-amber-400 font-bold">UI/UX Design:</clr>{" "}
                  Creating user-centered designs that balance aesthetics with
                  functionality, ensuring seamless user experiences across web
                  and mobile platforms.
                </p>
                <p className="text-blue-100 leading-relaxed md:text-lg text-md text-justify font-normal">
                  <clr className="text-amber-400 font-bold">
                    Problem-Solving:
                  </clr>{" "}
                  Approaching complex technical challenges with analytical
                  thinking and creative solutions, always eager to learn and
                  implement new technologies.
                </p>
              </div>
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
