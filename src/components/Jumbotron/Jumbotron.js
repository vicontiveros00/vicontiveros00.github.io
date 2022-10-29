import React from 'react';
import './Jumbotron.css';
import ProfilePic from '../../media/vic.png'

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <img className="jumbotron-img" src={ProfilePic} alt="hattara the rabbit" /> {/*remember to change this to an actual photo*/}
                <div className="jumbotron-text">
                    <h1>Hey! I'm Vic.</h1>
                    <br />
                    <p className="j-text">I'm an aspiring front end developer who loves to continuously learn through building projects.</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;