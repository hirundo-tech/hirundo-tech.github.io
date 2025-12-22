import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";
import Zoom from "@mui/material/Zoom";
import { motion } from "framer-motion";

const items = [
  {
    icon: IMAGES.service1,
    title: "Machine Learning",
    description:
      "Predictive, classification, regression models, Neural Networks, along with other tailored approaches designed to support data-driven decisions.",
  },
  {
    icon: IMAGES.service2,
    title: "Computer Vision",
    description:
      "Image recognition, classification and structuring models designed to improve workflows and automate visual processes.",
  },
  {
    icon: IMAGES.service3,
    title: "Generative AI",
    description:
      "Generative AI systems built through fine-tuning or APIs and prompt design, tailored to make knowledge accessible and actionable.",
  },
  {
    icon: IMAGES.service4,
    title: "Agents",
    description:
      "Autonomous and semi-autonomous systems that connect language models to software actions and operational workflows.",
  },
];

const Services = () => {
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="h-auto pb-10 bg-[#DCECF0] flex lg:flex-row flex-col justify-center items-center w-full">
      <div>
        <div className="text-[#1F1F1F] md:p-10 p-5 rounded-4xl lg:w-[80%] md:w-[85%] w-[90%] bg-[#D0DFE2] mx-auto flex md:flex-row flex-col gap-10 justify-between items-start">
          <div className="md:w-[42%] w-full md:text-[28px] leading-10 font-medium text-[22px] md:text-left text-center">
            If you want to integrate AI, you need a Team.
          </div>
          <div className="md:w-[45%] w-full">
            <div className="md:text-[15px] text-xs mb-6 leading-6 md:text-left text-center">
              To generate real impact, AI systems must be designed around your
              actual needs, developed with solid engineering, and maintained
              reliably over time. Only then can you reduce costs, increase
              revenue and improve operational efficiency.
            </div>
            <div className="flex lg:justify-start justify-center items-center">
              <button
                onClick={() => handleClick("https://calendly.com/hirundo-tech")}
                className="bg-[#2F80C9] text-[#DCECF0] font-medium md:text-[15px] md:w-[175px] w-[150px] text-[13px] h-[42px] cursor-pointer rounded-4xl"
              >
                Book AI Assessment
              </button>
            </div>
          </div>
        </div>

        <div
          className="md:mt-10 mt-5 lg:w-[80%] md:w-[85%] w-[90%] bg-[#DCECF0] mx-auto 
  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center"
        >
          {items.map((item, index) => {
            const cardRef = useRef(null);
            const [visible, setVisible] = useState(false);

            useEffect(() => {
              const observer = new IntersectionObserver(
                ([entry]) => setVisible(entry.isIntersecting),
                { threshold: 0.3 }
              );

              if (cardRef.current) observer.observe(cardRef.current);

              return () => observer.disconnect();
            }, []);

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ y: 70, opacity: 0 }} // start slightly below
                animate={visible ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1, // staggered delay
                  ease: "easeOut",
                }}
              >
                <ServiceCard item={item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ item }) => {
  return (
    <div
      className=" w-full  lg:pb-0 pb-4"
      style={{
        color: "#1F1F1F",
        background: "#D0DFE2",
        borderRadius: "32px",
        textAlign: "center",
      }}
    >
      <img
        src={item.icon}
        width={145}
        height={145}
        alt={item.title}
        className="mx-auto mb-2"
      />
      <div className="text-lg mb-3 font-semibold">{item.title}</div>
      <div className="text-[15px] xl:min-h-[180px]  lg:min-h-[230px] md:min-h-[110px]  text-center leading-6 px-6">
        {item.description}
      </div>
    </div>
  );
};

export default Services;
