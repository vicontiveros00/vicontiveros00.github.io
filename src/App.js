import './App.css';
//components
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import ProjectList from './components/ProjectList/ProjectList';
import Certi from './components/Certificates/Certi';
import Skills from './components/Skills/Skills';
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
    </div>
  );
}

export default App;