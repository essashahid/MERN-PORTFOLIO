import React from "react";
import SectionTitle from "../../components/sectionTitle";
import "@dotlottie/player-component";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": any;
    }
  }
}

const About: React.FC = () => {
  const skills: string[] = [
    "Tableau",
    "SQL",
    "Product Management",
    "Matlab",
    "AutoCad",
  ];

  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[50vh] w-1/2 sm:w-full">
          {/* Ensure dotlottie-player integration is correct for your project */}
          <dotlottie-player
            src="https://lottie.host/0fd2d6ae-613a-4f6b-bcd0-6e564cbbbe6f/RTPqVrVEgL.json"
            background="transparent"
            speed="1"
            autoplay
            loop
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:full">
          <p className="text-white">
            As a Master’s student in Engineering Management at Purdue
            University, I blend analytical rigor with a passion for product
            innovation. I've led teams and projects that enhanced operational
            workflows and customer satisfaction, revealing my drive for
            efficiency and actionable insights.
          </p>
          <p className="text-white">
            I'm actively seeking Product Management internships or co-ops in the
            tech industry for Summer 2024, where I can apply my data-driven
            approach to deliver strategic solutions. I am excited to bring my
            versatile background in Industrial Engineering, Supply Chain
            Optimization, and business analytics to a leadership role that
            challenges and expands my expertise. Feel free to connect with me
            for opportunities to collaborate on pioneering projects in Supply
            Chain and technology.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I have been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              <h1 className="text-tertiary text-sm">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
