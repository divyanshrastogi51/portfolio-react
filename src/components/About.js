import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../lottie2.json";
import { init } from "ityped";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 70,
      backDelay: 1500,
      strings: ["Hey There!", "Hola!", "Hello!", "Hi!"],
    });
  }, []);
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-28 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl font-medium text-white m-0 p-0">
            {" "}
            <span ref={textRef}></span>
          </h1>
          <h1 className="py-2 m-0 title-font sm:text-4xl text-5xl font-medium text-white">
            I'm <span className="font-bold text-mycolor-100">Divyansh</span>
            <br className="hidden lg:inline-block" />
          </h1>
          <h1 className="mt-0 pt-0 title-font sm:text-4xl text-5xl mb-4 font-medium text-white">
            Majoring in Software Engineering
          </h1>
          <p className="my-8 leading-relaxed text-2xl">
            I'm a final year student at LNMIIT pursuing B.Tech. in Communication
            and Computer science. I like to build amazing stuff. I'm a
            passionate developer who specializes in Full stack technologies.
            Team player, hard-working, and self-disciplined. Always ready to
            meet exciting opportunities...
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-mycolor-100 border-0 py-2 px-6 focus:outline-none hover:bg-mycolor-200 hover:text-white rounded text-lg font-semibold"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </section>
  );
}
