import React, { useState, useEffect } from 'react';
import './Intro.css';
import ProfilePic from '../../media/vic-himself.png'

function Intro() {
    //jumbotron is a functional component because of the useEffect hook
    const greetings = ['Moi!', 'Hey!', '¡Buen día!'];
    const [greetingIndex, setGreetingIndex] = useState(0);
    const intervalTime = 2000;
    
    useEffect(() => {
        const interval = setInterval(() => {
            const next = greetingIndex + 1;
            setGreetingIndex(greetings[next] ? next : 0);
        }, intervalTime)
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [greetingIndex]);
    
    return (
        <div className="intro">
            <img className="intro-img" src={ProfilePic} alt="Vic" />
            <div className="intro-text">
                <h1>{greetings[greetingIndex]} I'm Vic.</h1>
                <br />
                <p className="j-text">I'm an aspiring front end developer who loves to continuously learn through building projects.<br />Based in Nokia, Finland. &#127467;&#127470;</p>
            </div>
        </div>
    )
}

export default Intro;