import React from "react";

const AnimatedCards = ({ projects }) => {
  return (
    <div className="w-full">
      {projects.map((project, i) => {
        return (
          <div
            key={`p_${i}`}
            className={`w-full flex items-start md:h-[20vh] h-[40vh] sticky bottom-0 pb-5`}
            style={{ zIndex: projects.length - i }}
          >
            <div
              className={` bg-[#D0DFE2] shadow-[0px_2px_15px_-2px_#0000001A] w-full rounded-3xl border border-[#D0DFE2] text-[#1F1F1F] relative md:h-full py-5 px-4 sm:px-6 md:px-5 flex justify-start items-center gap-x-5`}
              style={{ top: `${i * 2}vh` }}
            >
              <div className="font-semibold text-4xl">{i + 1}</div>
              <div className="flex flex-col justify-center items-start gap-y-2">
                <div className="font-semibold text-lg">{project.title}</div>
                <div className="text-[15px]">{project.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedCards;
