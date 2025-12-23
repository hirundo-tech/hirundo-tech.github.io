import { IMAGES } from "../../assets";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const Hero = () => {
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

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
    smoothScrollBy(window.innerHeight, 700);
  };

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="md:h-auto relative h-auto bg-[#DCECF0] w-full">
      <div className="flex justify-center items-center w-full xl:px-10">
        <div className="lg:w-[80%] md:w-[85%] w-[90%] md:pt-10 pt-16 mx-auto flex lg:flex-row flex-col lg:gap-10  gap-5 justify-between items-center">
          <motion.div
            className="text-[#1F1F1F] flex flex-col lg:gap-y-10  gap-y-3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <div className="lg:-mb-5.5 md:font-semibold font-bold xl:text-[44px] lg:text-[36px] md:text-[30px] text-[22px] md:text-left text-center">
              We build AI Systems.
            </div>
            <div className="md:font-semibold font-bold lg:-mb-2 xl:text-[44px] lg:text-[36px] md:text-[30px] text-[22px] md:text-left text-center">
              Custom and outsourced.
            </div>
            <p className="mt-0 lg:text-lg text-xs md:text-left text-center">
              From design to deployment, we operate as an external AI unit or
              build custom systems around your business processes, combining
              strong engineering with structured project management skills.
            </p>
            <div className="flex md:justify-start justify-center items-center md:gap-x-5 gap-x-4">
              <button
                onClick={() => handleClick("https://calendly.com/hirundo-tech")}
                className="bg-[#2F80C9] text-[#DCECF0] font-semibold md:text-[13px] md:w-43.75 w-39.5 text-[13px] h-10.5 cursor-pointer rounded-4xl"
              >
                Book AI Assessment
              </button>
              <button
                onClick={() => handleClick("https://calendly.com/hirundo-tech")}
                className="border-2 bg-[#DCECF0] border-[#2F80C9] text-[#2F80C9] font-semibold md:text-[13px] text-[13px] md:w-35.75 w-32.5 flex justify-center items-center h-10.5 cursor-pointer rounded-4xl"
              >
                Our Services
              </button>
            </div>
          </motion.div>

          <motion.img
            src={IMAGES.heroImg}
            alt="hero image"
            width={419}
            height={419}
            className="bg-contain md:h-104.75 w-67.5 h-67.5 md:w-104.75 hover:scale-105 transition-all lg:mb-0 md:mb-3 mb-10"
            initial={isDesktop ? { x: 100, opacity: 0 } : { opacity: 1 }}
            whileInView={isDesktop ? { x: 0, opacity: 1 } : {}}
            viewport={{ once: false, amount: 0.5 }}
            animate={{
              y: [0, -15], // float up and down
            }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              x: { duration: 1, ease: "easeOut" },
              opacity: { duration: 1, ease: "easeOut" },
            }}
          />
        </div>
      </div>
      <div
        // onClick={handleScrollDown}
        className="bg-[#D0DFE2] lg:block hidden rounded-full p-4  mx-auto w-10.5 mb-17.5 mt-21.75 h-10.5 cursor-pointer"
      >
        <img src={IMAGES.down} alt="arrow-down" width={10} height={10} />
      </div>
    </section>
  );
};

export default Hero;
