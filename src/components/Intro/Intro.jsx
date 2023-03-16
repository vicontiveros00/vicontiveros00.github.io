import React, { useState, useEffect } from 'react';
import './Intro.css';
import 'animate.css';
import ProfilePic from '../../media/vic-himself.png'

const Intro = ({ url, proxy, key }) => {
    const greetings = ['Moi!', 'Hey!', '¡Buen día!'];
    const [greetingIndex, setGreetingIndex] = useState(0);
    //const [hasError, setHasError] = useState(false);
    const intervalTime = 2500;
    
    useEffect(() => {
        const interval = setInterval(() => {
            const next = greetingIndex + 1;
            setGreetingIndex(greetings[next] ? next : 0);
        }, intervalTime)
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [greetingIndex]);

    /*useEffect(() => {
        const checkApiStatus = async() => {
            try {
                const res = await fetch(`${proxy}${url}/projects`, {
                    headers: {
                        authorization: key
                    }
                })
                console.log(res.data);
                if (!res.ok) {
                    setHasError(true);
                }
            } catch (err) {
                console.error(err)
                setHasError(true);
                console.log('ye')
            }
        }
        checkApiStatus();
    }, [key, proxy, url])*/
    
    return (
        <>
        {/*{hasError && <div className='errormessage'>
            <p>API currently undergoing maintenance or having some errors. Check back in a bit!</p>
        </div>}*/}
        <div className="intro">
            <img className="intro-img" src={ProfilePic} alt="Vic" />
            <div className="intro-text">
                <h1 key={greetingIndex} className='animate__animated animate__fadeIn'>{greetings[greetingIndex]} I'm Vic.</h1>
                <br />
                <p className="j-text">I am currently a Software Designer at Solita FI, hoping to find my place in the tech world by being a part of the Developer Academy 2023.<br />Based in Tampere, Finland. &#127467;&#127470;</p>
            </div>
        </div>
        </>
    )
}

export default Intro;