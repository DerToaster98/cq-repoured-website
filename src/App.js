import './App.css';

import 'react-slideshow-image/dist/styles.css';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Logo from './components/header/Logo'
import NavBar from './components/header/NavBar'

import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Changelog from './pages/changelog/Changelog';
import Downloads from './pages/downloads/Downloads';
import PMD from './pages/pmd/PMD';
import Footer from './components/footer/footer';

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
        <Route path='/'>
          <Footer className="main-footer"></Footer>
        </Route>
        {/* 
        Regex to detect versions: ([A-Z][a-z])*(-([0-9])*) 
        <Route path='/([A-Z][a-z])*(-([0-9])*)/'></Route>
        //TODO: Redirect to new page => Redirect component
        */}
        
      </HashRouter>
    </div>
  );
}

export default App;
