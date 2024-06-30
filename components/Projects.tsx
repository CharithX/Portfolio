/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small section of my
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="grid gap-16 p-4 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]  mb-10">
                <img src={img} className="z-10 absolute bottom-0" alt={title} />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm mt-3">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full   lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(${-5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} className="p-2" alt="icon" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-[#00e599]">
                    Checkout Live
                  </p>
                  <FaLocationArrow className="ms-3" color="#00e599" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


