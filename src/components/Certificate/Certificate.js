import React from "react";
import './Certificate.css'

class Certificate extends React.Component {
    render() {
        const { certificate } = this.props;
        return (
            <div className="Certificate">
                <div className="image-container">
                    <img src={certificate.src} alt={certificate.name} />
                </div>
                <div className="certificate-info">
                    <h2>{certificate.name}</h2>
                </div>
            </div>
        )
    }
}

export default Certificate;