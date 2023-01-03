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
import DisplayError from './components/DisplayError/DisplayError';

const App = () => {
  const [projects, setProjects] = useState(null);
  const [certificates, setCertificates] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const getProjects = async() => {
      try {
        const res = await fetch(`${apiUrl}/projects`);
        const data = await res.json();
        setProjects(data.reverse());
      } catch (err) {
        console.log(err);
        setProjects('error');
      }
    }
    const getCertificates = async() => {
      try {
        const res = await fetch(`${apiUrl}/certificates`);
        const data = await res.json();
        setCertificates(data.reverse());
      } catch (err) {
        console.log(err);
        setCertificates('error');
      }
    }
    getProjects();
    getCertificates();
  }, [apiUrl])

  return (
    <div className="App">
      <NavBar />
      <Intro />
      {projects !== 'error' ? <ProjectList projects={projects}/> : <DisplayError />}
      {certificates !== 'error' ? <CertificateList certificates={certificates} /> : <DisplayError />}
      <Skills />
      <FunFacts />
      <Contact />
      <div className="footer">
        <p>&copy;Vic</p>
      </div>
    </div>
  );
}

export default App;