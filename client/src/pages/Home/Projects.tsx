import React, { useState, FC } from "react";
import SectionTitle from "../../components/sectionTitle";
import { projects } from "../../resources/projects";

interface Project {
  title: string;
  image: string;
  description: string;
}

const Projects: FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 sm:flex-col">
        <div style={{ borderLeft: "2px solid #135e4c82", padding: "10px" }} className="flex flex-col gap-20 w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">

          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className={`cursor-pointer ${selectedItemIndex === index ? 'bg-highlighted' : ''}`}
              style={selectedItemIndex === index ? { borderLeft: "4px solid #135e4c82", paddingLeft: "6px" } : {}}
            >
              <div>
                <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-white' : 'text-tertiary'}`}>{project.title}</h1>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex flex-col gap-10 items-center justify-center sm:flex-col">
            <img src={projects[selectedItemIndex].image} alt="" className="h-60 w-72" />
            <h1 className="text-secondary text-xl">{projects[selectedItemIndex].title}</h1>
            <p className="text-white">{projects[selectedItemIndex].description}</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
