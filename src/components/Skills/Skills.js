import React from "react";
import './Skills.css'
import Spinner from '../../media/loading.png';

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            output: false,
            isLoading: false
        }
    }

    render() {

        const renderOutput = () => {
            this.setState({
                isLoading: true
            })
            setTimeout(() => {
                this.setState({
                    output: true,
                    isLoading: false
                })
              }, 2000); //simulate API call             
        }

        const skillList = '{ \'HTML5\', \'CSS3\', \'Bootstrap\', \'JavaScript\', \'React\', \'SQL\', \'Node.js\', \'Git\', \'APIs with Express.js\' }';

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
                    <div className="ide-output"> {
                        this.state.isLoading ? <img src={Spinner} className = "spinner" alt='fetching from database...' /> : this.state.output && skillList
                    }
                    </div>
                </div>
                <div className="buttons-container">
                    <button className="run-button" onClick={renderOutput}>Run SQL Query</button>
                    <button className="run-button" onClick={() => {
                        this.setState({
                            output: false,
                            isLoading: false
                        })
                    }}>Reset</button>
                </div>
            </>
        )
    }
}

export default Skills;