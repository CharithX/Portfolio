import React from "react";
import {  skills } from "@/data";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Technologies = () => {
  return (
    <div className="py-20" id="technologies">
      <h1 className="heading lg:my-20 my-10">
        Familiar <span className="text-purple">Technologies</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {skills.map((skill, id) => (
          <div
            key={id}
            className={`rounded-2xl border-1 border-neutral-800 p-4 text-center`}
          >
            <AnimatedTooltip label={skill.label}>
              <skill.icon
                className="text-7xl mx-auto"
                style={{ color: skill.color }}
              />
            </AnimatedTooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
