import React from "react";
import './Certificate.css'
import 'animate.css';

const Certificate = (props) => {
    const { certificate } = props;
    return (
        <a className="certificate-link" href={certificate.href}>
            <div className="Certificate animate__animated animate__fadeIn">
                <div className="image-container">
                    <img src={certificate.src} alt={certificate.name} />
                </div>
                <div className="certificate-info">
                    <h2>{certificate.name}</h2>
                </div>
            </div>
        </a>
    )
}

export default Certificate;