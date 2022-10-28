import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import ProjectList from './components/ProjectList/ProjectList';
import projects from './util/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;