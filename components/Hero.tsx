"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import DownloadButton from "./ui/DownloadButton";
import { socialMedia } from "@/data";
import { stats } from "@/data"; // Import the stats array
import { useCountUp } from "use-count-up";

const Hero = () => {
  return (
    <div className="xl:pb-20 pt-36" id="Home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:left-32 md-top-20 h-screen"
          fill="green"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="green"
        />
        <Spotlight
          className="-top-28 -left-80 h-[80vh] w-[50vw]"
          fill="green"
        />
      </div>
      <div className="h-screen w-full dark:bg-[#1A1A1A] bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1A1A1A] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex items-center justify-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))}
      </div>
      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100">
            Hi, I'm Charith L Jayasingha
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Full Stack Software Engineer & DevOps Enthusiast"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Transforming Ideas into Interactive Realities
          </p>
          <DownloadButton />
          <div className="xl:flex items-center justify-center gap-10 mx-auto xl:my-10 my-3 max-w-[120px]">
            {stats.map((stat) => {
              const { value } = useCountUp({
                isCounting: true,
                start: 0,
                end: stat.end,
                duration: 2,
                easing: "easeOutCubic",
                decimalPlaces: 0,
              });
              return (
                <div
                  key={stat.id}
                  className="flex items-center justify-center gap-5 mt-10"
                >
                  <div className="font-bold xl:text-5xl text-2xl">{value}+</div>
                  <div className="font-normal xl:text-xl text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
