import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { myskills } from "../data";
import { Icon } from "semantic-ui-react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-mycolor-900" />
          <h1 className="sm:text-4xl text-4xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
            Skills and technologies I have implemented in previous projects.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {myskills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full ">
                <div className="w-1/2 flex justify-start">
                  <div className="mr-4">
                    <Icon className="" name={skill.name} color="teal" />
                  </div>
                  <div>
                    <span className="w-2/4 title-font font-medium text-white">
                      {skill.title}
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex justify-end">
                    <BadgeCheckIcon className="text-mycolor-100 w-6 h-6 flex-shrink-0 mr-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
