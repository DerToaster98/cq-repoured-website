import './App.css';

import { HashRouter, Route } from 'react-router-dom';

import Logo from './components/header/Logo'
import NavBar from './components/header/NavBar'

import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Changelog from './pages/changelog/Changelog';
import Downloads from './pages/downloads/Downloads';
import PMD from './pages/pmd/PMD';

function App() {

  return (
    <div className="App">
      
      <HashRouter basename="/">
        <Route path='/'>
          <Logo></Logo>
          <NavBar className="centered"></NavBar>
        </Route>
        
        <Route path='/' exact component={Home}></Route>
        <Route path='/team' exact component={Team}></Route>
        <Route path='/changelog' exact component={Changelog}></Route>
        <Route path='/changelog/:changelogID' component={Changelog}></Route>
        <Route path='/downloads' exact component={Downloads}></Route>
        <Route path='/pmd' exact component={PMD}></Route>
        
      </HashRouter>
      
    </div>
  );
}

export default App;
