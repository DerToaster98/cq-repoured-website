import logo from './logo.svg';
import './App.css';

import { HashRouter, Route, Redirect } from 'react-router-dom';

import Logo from './components/header/Logo'
import NavBar from './components/header/NavBar'

import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      
      <HashRouter basename="/">
        <Route path='/'>
          <Logo></Logo>
          <NavBar className="centered"></NavBar>
        </Route>
        
        <Route path='/' exact component={Home}></Route>
        {/*<Route path='/changelog/:changelogID' component={}></Route>
        <Route path='/downloads' exact component={}></Route>
        <Route path='/team' exact component={}></Route>
        <Route path='/pmd' exact component={}></Route>
        */}
      </HashRouter>
      
    </div>
  );
}

export default App;
