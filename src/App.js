import './App.css';
//components
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import ProjectList from './components/ProjectList/ProjectList';
import Certi from './components/Certificates/Certi';
import Skills from './components/Skills/Skills';
import FunFacts from './components/FunFacts/FunFacts';
import Contact from './components/Contact/Contact';
//resources
import projects from './util/Projects';
import certificates from './util/Certificates';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <ProjectList projects={projects}/>
      <Certi certificates={certificates} />
      <Skills />
      <FunFacts />
      <Contact />
    </div>
  );
}

export default App;