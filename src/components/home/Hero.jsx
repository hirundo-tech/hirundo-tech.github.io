import React from "react";
import Button from "../shared/Button";
import { IMAGES } from "../../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="md:h-[90vh] h-auto bg-[#DCECF0] flex justify-center items-center w-full">
      <div className="lg:w-[80%] md:w-[85%] w-[90%] md:pt-0 pt-10 mx-auto flex lg:flex-row flex-col lg:gap-10 gap-5 justify-between items-center">
        <motion.div
          className="text-[#1F1F1F] flex flex-col gap-y-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-semibold md:text-[44px] text-[22px] md:text-left text-center">
            We build AI Systems.
            <br /> Custom and outsourced.
          </h1>
          <p className="mt-0 lg:text-lg text-xs lg:text-left text-center">
            From design to deployment, we operate as an external AI unit or
            build custom systems around your business processes, combining
            strong engineering with structured project management skills.
          </p>
          <div className="flex md:justify-start justify-center items-center md:gap-x-7 gap-x-4">
            <Button>Book AI Assessment</Button>
            <Button variant="outlined">Our Services</Button>
          </div>
        </motion.div>

        <motion.img
          src={IMAGES.heroImg}
          alt="hero image"
          width={419}
          height={419}
          className="w-full h-full bg-contain"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;
