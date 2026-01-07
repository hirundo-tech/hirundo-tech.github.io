import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";

const sitemap = [
  {
    label: "Home",
    path: "/",
  },
  { label: "Outsourcing", path: "/outsourcing" },
  { label: "Custom Development", path: "custom-ai" },
  { label: "Portfolio", path: "/portfolio" },
];
const contacts = [
  {
    label: "Calendly",
    path: "https://calendly.com/hirundo-tech",
  },
  {
    label: "Linkedin",
    path: "https://www.linkedin.com/company/hirundo-technologies/",
  },
  { label: "Github", path: "https://github.com/hirundo-tech" },
  { label: "E-mail Us", path: "/portfolio", isNew: false },
];

const contactUs = ["Calendly", "Linkedin", "Github", "E-mail Us"];

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (link, isNew = true) => {
    if (isNew) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate(link);
    }
  };
  return (
    <section className="bg-[#DCECF0] lg:px-5 px-3 py-10 lg:mt-0 mt-4 flex justify-center items-center w-full">
      <div className="w-full bg-[#D0DFE2] text-[#1F1F1F] rounded-4xl py-3">
        <div className="lg:px-20 lg:pt-10 pt-5 md:px-0 px-10 w-full flex md:flex-row flex-col lg:gap-0 gap-10  justify-between lg:items-center items-start">
          <div className="md:px-20 px-0 lg:pl-0">
            <div
              className="-ml-2"
              style={{ display: "flex", alignItems: "center", gap: 0 }}
            >
              <img
                src={IMAGES.logotype} // replace with your logo path
                alt="HIRUNDO Logo"
                width={175}
                height={95}
                fetchPriority="high"
                loading="lazy"
              />
            </div>
            <div className="max-w-md text-[15px] leading-5 -mt-3 mb-5">
              AI systems. Custom or outsourced. <br />
              From design to deployment, we combine engineering execution with
              structured project management.
            </div>
            <Button
              className="w-35.25!"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Back to Top
            </Button>
          </div>
          <div className="md:px-20 pl-0 flex lg:flex-row flex-col justify-start items-start lg:gap-20 gap-10 md:w-[45%] w-full">
            <div>
              <div className="text-lg md:font-semibold font-semibold mb-4">
                Sitemap
              </div>
              <div className="flex justify-start items-start flex-col gap-y-2">
                {sitemap.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (index === 0) {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      } else {
                        navigate(item.path);
                      }
                    }}
                    className={`text-[15px] transition-all duration-300 text-[#1F1F1F] hover:text-[#2f80c9]`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-lg md:font-semibold font-semibold mb-4">
                Contact Us
              </div>
              <div className="flex justify-start items-start flex-col gap-y-2">
                {contacts.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(item.path, item?.isNew)}
                    className={`text-[15px] cursor-pointer transition-all duration-300 text-[#1F1F1F] hover:text-[#2f80c9]`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs lg:px-10 leading-6 px-5 mt-10 mb-1">
          Hirundo Technologies s.r.l.s., Massafra (TA), Italy, VAT: 03375820739.
          All rights are reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
