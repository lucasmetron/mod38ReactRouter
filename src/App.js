import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Aulas from './components/Aulas';
import Aula from './components/Aula';
import Sobre from './components/Sobre';
import Assistir from './components/Assistir';
import loginReducer from './reducers/loginReducer';
import PrivateRoute from './components/PrivateRouter';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'


const store = createStore(loginReducer)

function App() {
  return (

    <Provider store={store}>

      <BrowserRouter>
        <div className="app" >
          <Nav></Nav>

          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/aulas/:id'>
              <Aula></Aula>
            </Route>

            <PrivateRoute path='/aulas'>
              <Aulas></Aulas>
            </PrivateRoute>

            <Route exact path='/sobre'>
              <Sobre></Sobre>
            </Route>

            <Route exact path='/assistir'>
              <Assistir></Assistir>
            </Route>

            <Route path='*'>
              <div className='center'>Pagina nao encotrada</div>
            </Route>

          </Switch>
        </div>

      </BrowserRouter>

    </Provider>

  );
}

export default App;
