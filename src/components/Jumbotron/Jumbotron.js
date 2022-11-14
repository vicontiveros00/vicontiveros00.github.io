import React from 'react';
import './Jumbotron.css';
import ProfilePic from '../../media/vic-himself.png'

class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Moi!'
        }
    }

    changeGreeting() {
        const time = 2000;
        if (this.state.greeting === 'Moi!') {
            setTimeout(() => {
                this.setState({
                    greeting: 'Hey!'
                })
            }, time)
        } else if (this.state.greeting === 'Hey!') {
            setTimeout(() => {
                this.setState({
                    greeting: '¡Buen día!'
                })
            }, time)
        } else {
            setTimeout(() => {
                this.setState({
                    greeting: 'Moi!'
                })
            }, time)
        }
        return this.state.greeting;
    }
    
    render() {
        return (
            <div className="jumbotron">
                <img className="jumbotron-img" src={ProfilePic} alt="hattara the rabbit" />
                <div className="jumbotron-text">
                    <h1>{this.changeGreeting()} I'm Vic.</h1>
                    <br />
                    <p className="j-text">I'm an aspiring front end developer who loves to continuously learn through building projects.<br />Based in Nokia, Finland. &#127467;&#127470;</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;