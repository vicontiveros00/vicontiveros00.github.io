import React from "react";
import './Certificate.css'

class Certificate extends React.Component {
    render() {
        const { certificate } = this.props;
        return (
            <a className="certificate-link" href={certificate.href}>
                <div className="Certificate">
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
}

export default Certificate;