import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Aula from './components/Aulas';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="app" >
      <Nav></Nav>
      <Home></Home>
      <Aula></Aula>
      <Sobre></Sobre>
    </div>
  );
}

export default App;
