'use client';
import { FaLocationArrow } from "react-icons/fa6";
import AnimatedCounter from "../components/AnimatedCounter";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Sportlight"; 
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { words } from "@/data";
// import HeroModel from "./HeroModels/HeroModel";
// import HeroExperience from "./models/hero_models/HeroExperience";


const Hero = () => {
  return (
    <div className="pb-20 pt-3">
      
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
              <h1>
                Shaping 
                <span className="absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden">
                  <span className="wrapper">
                    {words.map((word)=>(
                      <span className="flex items-center md:gap-3 gap-1 pb-2" key={word.text}>
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>

              <p className="text-white-50 text-sm md:text-xl relative z-10 pointer-events-none">
                Hi! I&apos;m Mustopha, a Next.js Developer based in Nigeria with a passion for code.
              </p>

              <a href="#about" className="relative z-20 cursor-pointer md:w-80 md:h-16 mt-6 w-60 h-12">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>

        </header>

        {/* <figure>
          <div className="hero-3d-layout ">
            <HeroModel />
          </div>
        </figure> */}

      </div>



      {/* <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Mustopha, a Next.js Developer based in Nigeria.
          </p>
          
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div> */}
<AnimatedCounter />

    </div>
  );
};

export default Hero;
