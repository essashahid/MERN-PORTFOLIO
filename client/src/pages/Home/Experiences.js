import React from "react";
import SectionTitle from "../../components/sectionTitle";
import { experiences } from "../../resources/experiences"; // Correct import statement
// import exp from "constants";

function Experiences() 
{
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    return (
        <div>
            <SectionTitle title="Experience"/>

            <div className="flex py-10 sm:flex-col">
            <div style={{ borderLeft: "2px solid #135e4c82", padding: "10px" }} className="flex flex-col gap-20 w-1/3 sm:flex-row sm:overflow-scroll sm:w-full">
 
            {experiences.map((experience, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedItemIndex(index)}
                    className={`cursor-pointer ${selectedItemIndex === index ? 'bg-highlighted' : ''}`} // Example class change
                    style={selectedItemIndex === index ? { borderLeft: "4px solid #135e4c82", paddingLeft: "6px"} : {}}
                >
                    <div>
                        <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-white' : 'text-tertiary'}`}>{experience.period}</h1>
                    </div>
                </div>
            ))}
                            </div>

                <div className="flex flex-col gap-5">
                <h1 className="text-secondary text-xl">{experiences[selectedItemIndex].title}</h1>
                <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
