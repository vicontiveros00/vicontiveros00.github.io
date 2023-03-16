import { useEffect, useState } from 'react';
import './App.css';
//components
import Intro from './components/Intro/Intro';
import NavBar from './components/NavBar/NavBar';
import ProjectList from './components/ProjectList/ProjectList';
import CertificateList from './components/Certificates/CertificateList';
import Skills from './components/Skills/Skills';
import FunFacts from './components/FunFacts/FunFacts';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import DisplayError from './components/DisplayError/DisplayError';

const App = () => {
  const [projects, setProjects] = useState(null);
  const [certificates, setCertificates] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const corsProxy = process.env.REACT_APP_CORS_PROXY;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getProjects = async() => {
      try {
        const res = await fetch(`${corsProxy}${apiUrl}/projects`, {
          headers: {
            authorization: apiKey
          }
        });
        const data = await res.json();
        setProjects(data.reverse());
      } catch (err) {
        console.log(err);
        setProjects('error');
      }
    }
    const getCertificates = async() => {
      try {
        const res = await fetch(`${corsProxy}${apiUrl}/certificates`, {
          headers: {
            authorization: apiKey
          }
        });
        const data = await res.json();
        setCertificates(data.reverse());
      } catch (err) {
        console.log(err);
        setCertificates('error');
      }
    }
    getProjects();
    getCertificates();
  }, [apiUrl, apiKey, corsProxy])

  return (
    <div className="App">
      {projects === 'error' && certificates === 'error' && (
        <div className="errormessage">
          <p>API currently undergoing maintenance or having some errors. Check back in a bit!</p>
        </div>
      )}
      {/*display an error message if api cant get both endpoints*/}
      <NavBar />
      <Intro />
      {projects !== 'error' ? <ProjectList projects={projects}/> : <DisplayError />}
      {certificates !== 'error' ? <CertificateList certificates={certificates} /> : <DisplayError />}
      <Skills />
      <FunFacts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;