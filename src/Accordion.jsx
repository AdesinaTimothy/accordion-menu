import { useState } from "react"
import accordionData from "./AccordionData.js"



const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState (null);


    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }


    return (
        <div>
            {accordionData.map((section, index) => (
            <div className="section" key = {index}>
                <div className="section-title" onClick={() => toggleSection(index)}>
                    <h4>{section.title}</h4>
                    <span>{activeIndex === index ? '-' : '+'}</span> 
                </div>


                {activeIndex === index && (
                    <div className="section-content">
                    <p className="text-content">{section.content}</p>
                </div>
                )}
                
            </div>
        ))}
        </div> 
    )
}

export default Accordion