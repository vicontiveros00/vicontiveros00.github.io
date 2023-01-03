import React, { useState } from "react";
import './Skills.css'
import { PulseLoader } from "react-spinners";

const Skills = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [displaySkills, setDisplaySkills] = useState(false);
    const skillList = '{ \'HTML5\', \'CSS3\', \'Bootstrap\', \'JavaScript\', \'React\', \'SQL\', \'Node.js\', \'Git\', \'Express.js\' }';
    const renderOutput = () => {
        const delay = Math.floor(Math.random() * 3000 + 1) + 1000;
        setIsLoading(true);
        setTimeout(() => {
            setDisplaySkills(true);
            setIsLoading(false);
        }, delay)
    }
    return (
        <>
            <h1 className="skills-title" id="skills">Skill set</h1>
            <div className="fake-ide">
                <div className="ide-numbers">
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
                <div className="ide-input">
                    <span className="blue">SELECT</span> <span className="asterisk">*</span> <br />
                    <span className="blue">FROM</span> skills;<br />
                    <span className="comment">--sqlite 3.39.4</span><span className="blinking">|</span>
                </div>
                <div className="ide-output"> 
                    {isLoading ? <PulseLoader color="#f3f3f3" cssOverride={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}/> : displaySkills && skillList}
                </div>
            </div>
            <div className="buttons-container">
                <button className="run-button" disabled={displaySkills} onClick={renderOutput}>Run SQL Query</button>
                <button className="run-button" onClick={() => {
                    setIsLoading(false);
                    setDisplaySkills(false);
                }}>Reset</button>
            </div>
        </>
    )
}

export default Skills;