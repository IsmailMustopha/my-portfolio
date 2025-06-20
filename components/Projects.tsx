'use client';
import darkSaasLandingPage from "@/public/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/public/light-saas-landing-page.png";
import aiStartupLandingPage from "@/public/ai-startup-landing-page.png";
import CheckCircleIcon from "@/public/check-circle.svg";
import ArrowUpRight from "@/public/arrow-down.svg";
import Image from "next/image";
import Card from "./Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div>
      <div className="pb-16 lg:py-24 ">
        <div className="lg:max-w-5xl mx-auto w-full max-w-full">
        <h1 className="font-bold text-4xl md:text-5xl text-center">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See how I transformed concepts into engaging digital experiences. </p>
          <div className="flex md:mt-20 flex-col gap-16 mt-10  ">
            {portfolioProjects.map(project=>(
                <Card 
                  className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16" key={project.title} 
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">

                    <div className="bg-gradient-to-r gap-2 from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span className="">{project.company}</span>
                      <span className="">&bull;</span>
                      <span className="">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl  mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map(result=>(
                        <li className="flex gap-2 text-sm md:text-base text-white/50" key={result.title}>
                          <CheckCircleIcon className='size-5 md:size-6' />
                          <span className="">{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} className="z-50">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer">
                        <span>View Live Site</span>
                        <ArrowUpRight className='size-4' />
                      </button>
                    

                    </a>
                    </div>
                    <div className="relative">
                      <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:w-auto lg:max-w-none" />
                    </div>
                  </div>
                </Card>
            ))}
          </div>
          </div>
      </div>
    </div>
  )
};
