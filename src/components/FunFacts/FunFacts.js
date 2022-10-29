import React from "react";
import "./FunFacts.css";

class FunFacts extends React.Component {
    render() {
        return (
            <div className="facts-container" id="facts">
                <h1 className="facts-title">Fun Facts About Me!</h1>
                <p>I own two crazy rabbits. Hattara and S&auml;de. <span className="hopping">&#128007;</span></p>
                <p>I'm a father to a rambunctious 14 months old boy named Luca. &#128118;</p>
                <p>I can type up to 100 WPM (US Layout) putting me at the 90th percentile. &#9000;</p>
                <p>Cooking &#127858; and retro video gaming &#127918; are what I do most outside of coding.</p>
                <p>Back in the States I owned a sports car and raced on local race tracks.  <span className="driving">&#128663;</span><br /><span style={{fontSize: '1rem'}}>(A 1996 Mazda Miata for those interested.)</span></p>
                <hr />
            </div>
        )
    }
}

export default FunFacts;