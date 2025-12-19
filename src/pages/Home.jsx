import React from "react";
import { IMAGES } from "../assets";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Team from "../components/home/Team";
import Footer from "../components/layout/Footer";
import RiskFree from "../components/home/RiskFree";

const Home = () => {
  const smoothScrollBy = (distance, duration = 700) => {
    const start = window.scrollY;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      // easeInOutCos function for smooth acceleration/deceleration
      const ease = 0.5 * (1 - Math.cos(Math.PI * progress));
      window.scrollTo(0, start + distance * ease);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const handleScrollDown = () => {
    smoothScrollBy(window.innerHeight, 700); // scroll by 1 viewport height in 700ms
  };

  return (
    <div className="text-4xl bg-[#DCECF0] min-h-screen w-full relative">
      <Hero />
      <Services />
      <RiskFree />
      <Team />
      <Footer />

      <div
        onClick={handleScrollDown}
        className="bg-[#D0DFE2] rounded-full p-4 fixed bottom-5 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <img src={IMAGES.down} alt="arrow-down" width={10} height={10} />
      </div>
    </div>
  );
};

export default Home;
