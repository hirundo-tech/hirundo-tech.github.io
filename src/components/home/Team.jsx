import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../../assets";
import Fade from "@mui/material/Fade";

const items = [
  {
    icon: IMAGES.team2,
    name: "Andrew - ",
    role: "AI Dev & Business Manager",
    linkedin: "https://www.linkedin.com/in/giacomo-maraglino-9a811b144/",
    github: "https://github.com/giacomo-giacomo",
    description:
      "AI engineer with 7+ years of Python experience, specialized in Data Science, ML, and GenAI.Co-founder of Sirio, raising over 800K$, where he enhanced Business Management skills, now works as AI developer & business lead at Hirundo.",
  },
  {
    icon: IMAGES.team1,
    name: "Giacomo - ",
    role: "Fullstack AI Developer",
    linkedin: "https://www.linkedin.com/in/andrew-costa-95013013b/",
    github: "https://github.com/andrew4costa",
    description:
      "AI engineer with 7+ years of Python experience, specialized in Data Science, ML, and GenAI.Co-founder of Sirio, raising over 800K$, where he enhanced Business Management skills, now works as AI developer & business lead at Hirundo.",
  },
];

const Team = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio >= 0.1);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="h-auto pb-10 bg-[#DCECF0] flex justify-center items-center w-full">
      <div className="text-[#1F1F1F] lg:p-10 p-4 rounded-4xl lg:w-[70%] md:w-[80%] w-[95%] mx-auto">
        <div className="text-[28px] font-medium">Meet Our Team.</div>
        <div className="text-[15px] leading-5 mt-8 lg:max-w-[80%] max-w-full">
          We are a deliberately small, highly specialized team with a strong
          academic background and hands-on experience in complex, real-world
          projects. Check our Github and Linked In History.
        </div>
        <div className="text-[15px] font-semibold leading-5 my-4 max-w-[80%]">
          We believe in small, highly-specialized and focused teams that are
          able to manage complex and high-impact workflows.
        </div>
        <div className="text-[15px] leading-5 max-w-[80%]">
          Supported by a trusted network of domain specialists, we scale
          solutions beyoond pure development.
        </div>

        <div
          ref={ref}
          className="flex md:flex-row flex-col justify-between mt-10 items-center gap-10"
        >
          {items.map((item, index) => (
            <Fade
              key={index}
              in={visible}
              timeout={600 + index * 200}
              style={{ transitionDelay: "100ms" }}
            >
              <div>
                <TeamCard member={item} />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="md:w-[383px] md:h-[562px] h-auto p-5 w-full"
      style={{
        color: "#1F1F1F",
        background: "#D0DFE2",
        borderRadius: "32px",
        textAlign: "center",
      }}
    >
      <img
        src={member.icon}
        width={130}
        height={195}
        alt={member.name}
        className="mx-auto"
      />
      <div className="text-lg mt-2 font-semibold">{member.name}</div>
      <div className="text-lg mb-4 font-semibold">{member.role}</div>
      <div className="lg:text-[15px] text-xs text-center mb-4 leading-6 lg:px-6 px-0">
        {member.description}
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <img
          src={IMAGES.github}
          width={31}
          height={31}
          onClick={() => handleClick(member.github)}
          className="cursor-pointer"
        />
        <img
          src={IMAGES.linkedin}
          width={31}
          height={31}
          onClick={() => handleClick(member.linkedin)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Team;
