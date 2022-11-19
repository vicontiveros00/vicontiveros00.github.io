import React, { useState, useEffect } from 'react';
import './Jumbotron.css';
import ProfilePic from '../../media/vic-himself.png'

function Jumbotron() {
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
    }, [greetingIndex]);
    
    return (
        <div className="jumbotron">
            <img className="jumbotron-img" src={ProfilePic} alt="Vic" />
            <div className="jumbotron-text">
                <h1>{greetings[greetingIndex]} I'm Vic.</h1>
                <br />
                <p className="j-text">I'm an aspiring front end developer who loves to continuously learn through building projects.<br />Based in Nokia, Finland. &#127467;&#127470;</p>
            </div>
        </div>
    )
}

export default Jumbotron;