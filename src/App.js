import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Aula from './components/Aulas';
import Sobre from './components/Sobre';

import { BrowserRouter as Router, Route } from 'react-router-dom';
//BrowserRouter é responsavel por gerenciar as rotas (as é para apelidar o BrouserRouter)
//Route é onde iremos setar a rota

function App() {
  return (

    <Router>
      <div className="app" >

        <Nav></Nav>
        <Route path='/'> {/* Setando a rota onde deve ser exibido o componente */}
          <Home></Home>
        </Route>
        <Route path='/aulas'> {/* Setando a rota onde deve ser exibido o componente */}
          <Aula></Aula>
        </Route>
        <Route path='/sobre'> {/* Setando a rota onde deve ser exibido o componente */}
          <Sobre></Sobre>
        </Route>

      </div>
    </Router>

  );
}

export default App;
