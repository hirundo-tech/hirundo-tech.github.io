import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../../assets";
import Fade from "@mui/material/Fade";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ImGithub } from "react-icons/im";
import linkedinIcon from "../../assets/images/linkedin.png";

const items = [
  {
    icon: IMAGES.team2,
    name: "Giacomo - ",
    role: "AI Dev & Business Manager",
    linkedin: "https://www.linkedin.com/in/giacomo-maraglino-9a811b144/",
    github: "https://github.com/giacomo-giacomo",
    description:
      "AI engineer with 7+ years of Python experience, specialized in Data Science, ML, and GenAI. Co-founder of Sirio, raising over 800K$, where he enhanced Business Management skills, now works as AI developer & business lead at Hirundo.",
  },
  {
    icon: IMAGES.team1,
    name: "Andrew - ",
    role: "Fullstack AI Developer",
    linkedin: "https://www.linkedin.com/in/andrew-costa-95013013b/",
    github: "https://github.com/andrew4costa",
    description:
      "AI & Machine Learning Engineer with an MSC in Data Science and Economics, helping organizations transform complex data into scalable, production-ready AI products—from strategy and modeling to deployment and real-world impact.",
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
    <section className="h-auto md:mt-20 mt-20 lg:mt-0 pb-10 bg-[#DCECF0] flex justify-center items-center w-full">
      <div className="text-[#1F1F1F] lg:p-10 p-4 rounded-4xl xl:w-[58%] lg:w-[75%] md:w-[95%] w-[95%] mx-auto">
        <div className="text-[28px] md:font-semibold font-semibold">
          Meet Our Team.
        </div>
        <div className="text-[15px] leading-7 mt-8 lg:max-w-[87%] max-w-full">
          We are a deliberately small, highly specialized team with a strong
          academic background and hands-on experience in complex, real-world
          projects. Check our Github and Linked In History.
        </div>
        <div className="text-[15px] font-semibold leading-7 my-4 max-w-[87%]">
          We believe in small, highly-specialized and focused teams that are
          able to manage complex and high-impact workflows.
        </div>
        <div className="text-[15px] leading-7 max-w-[87%]">
          Supported by a trusted network of domain specialists, we scale
          solutions beyond pure development.
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
      className="lg:w-95.75 md:w-85 md:h-146.5 h-auto p-5 w-full"
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
      <div className="text-lg mt-6 md:font-semibold font-semibold">
        {member.name}
      </div>
      <div className="text-lg mb-4 md:font-semibold font-semibold">
        {member.role}
      </div>
      <div className="text-[15px] text-center mb-4 leading-7 lg:px-6 px-0">
        {member.description}
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <img
          src={linkedinIcon}
          width={35}
          height={35}
          alt={"linkedin"}
          onClick={() => handleClick(member.linkedin)}
          className="cursor-pointer lg:h-9 lg:w-9 md:w-7.5 md:h-7.5 w-[25px] h-[25px]"
        />
        <ImGithub
          className={`cursor-pointer text-black lg:text-[35px] md:text-[30px] text-[25px]`}
          onClick={() => handleClick(member.github)}
        />
      </div>
    </div>
  );
};

export default Team;
