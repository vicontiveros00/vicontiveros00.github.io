import React from "react";
import './Certi.css'
import Certificate from '../Certificate/Certificate';

class Certi extends React.Component {
    render() {
        return (
            <>
                <h1 className="certificates-title" id="certificates">Certificates</h1>
                <div className="certificates-container">
                    {this.props.certificates.map(cert => {
                        return <Certificate key={cert.id} certificate={cert}/>
                    })
                    }
                </div>
            </>
        )
    }
}

export default Certi;