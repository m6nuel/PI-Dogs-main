import './App.css';
import { BrowserRouter, Route, Switch,  } from "react-router-dom"
import { LandingPage } from './components/LandingPage';
import { Home } from './components/Home';
import { DetailDog } from './components/DetailDog';
import { NewDog } from './components/NewDog';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <DetailDog />
          </Route>
          <Route path="/newdog">
            <NewDog />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;