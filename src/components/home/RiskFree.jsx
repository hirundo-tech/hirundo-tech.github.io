import React from "react";
import Button from "../shared/Button";
import AnimatedCards from "./AnimatedCards";

const data = [
  {
    title: "Work Assessment",
    description:
      "We start with a technical and business-oriented call to understand your project, constraints and objectives.",
  },
  {
    title: "Go/No-Go Program",
    description:
      "We define a clear approach, tangible milestones and expected KPIs in a structured design document.",
  },
  {
    title: "Reviews",
    description:
      "For each milestone, we show the KPIs. If expectations are not met, we don’t move forward to the next phase and you pay only the work you’ve approved.",
  },
  {
    title: "Delivery & Maintenance",
    description:
      "We deliver the system with full documentation. You can choose ongoing maintenance or take full ownership.",
  },
];

const RiskFree = () => {
  return (
    <section className="h-auto lg:py-40 py-10 bg-[#DCECF0] flex md:flex-row flex-col justify-center items-center w-full">
      <div className="lg:w-[80%] md:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col gap-10 justify-between items-start">
        <div className="text-[#1F1F1F] flex flex-col gap-y-5">
          <h1 className="font-medium lg:text-[28px] text-[22px] lg:block hidden">
            We are not just developers.
          </h1>
          <h1 className="font-medium lg:text-[28px] text-[22px] lg:hidden block">
            Not just developers
          </h1>
          <p className="mt-0 lg:text-lg text-xs my-1">
            Building AI systems requires more than writing code. <br /> We take
            ownership of planning, coordination and delivery, ensuring clear
            milestones, alignment with business goals and predictable outcomes.
          </p>
          <div className="flex justify-start items-center gap-x-7">
            <Button>Book AI Assessment</Button>
          </div>
        </div>
        <div className="md:pl-3">
          <h1 className="text-[#1F1F1F] mb-10 font-medium lg:text-[28px] text-[22px]">
            Risk-free workflow.
          </h1>
          <div className="flex flex-col gap-y-5">
            <AnimatedCards projects={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFree;
