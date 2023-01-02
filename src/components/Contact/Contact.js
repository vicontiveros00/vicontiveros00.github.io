import React, { useState } from "react";
import './Contact.css';
import Spinner from '../../media/loading.png';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [isLoading, setLoading] = useState(false);

    const [state, handleSubmit] = useForm("mgeqnddd");
    if (state.succeeded) {
        return (
            <>
                <h1 className="contact-title">Contact Me</h1>
                <div className="contact-container">
                    <form onSubmit={handleSubmit}>
                        <p>Message sent! Thanks for reaching out. &#128075;</p>
                    </form>
                </div>
            </>
        )
    }

    return (
        <>
            <h1 className="contact-title" id="contact">Contact Me</h1>
            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder="email@email.fi"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    /><br />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message">
                        Message
                    </label><br />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="What's up?"
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                        /*onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                handleSubmit();
                            }
                        }}*/
                    /><br />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" className="submit" disabled={state.submitting} onClick={() => {
                        email && message && setLoading(true);
                    }}>
                        {isLoading ? <img src={Spinner} alt="" className="contact-spinner"/> : <p>Submit</p>}
                    </button>
                </form>
            </div>
        </>
        )
}

export default Contact;