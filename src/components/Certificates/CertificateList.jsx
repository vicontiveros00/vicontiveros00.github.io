import React from "react";
import './CertificateList.css'
import Certificate from '../Certificate/Certificate';
import PulseLoader from "react-spinners/PulseLoader";

const CertificateList = (props) => {
    const { certificates } = props;
    return (
        <>
            <h1 className="certificates-title" id="certificates">Certificates</h1>
            <div className="certificates-container">
                {certificates ? 
                    certificates.map((certificate) => {
                        return <Certificate key={certificate.id} certificate={certificate}/>
                    })
                    :
                    <PulseLoader color="#f3f3f3" cssOverride={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '1.35rem'
                    }}/>
                }
            </div>
        </>
    )
}

export default CertificateList;