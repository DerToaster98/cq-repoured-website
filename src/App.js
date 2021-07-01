import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Logo from './components/header/Logo'
import NavBar from './components/header/NavBar'

function App() {
  return (
    <div className="App">
      <table className="content-table">
        <tbody>
          <tr>
            <th className="bg-side"></th>
            <th className="bg-center">
              <Router>
                <Route path='/'>
                  <Logo></Logo>
                  <NavBar className="centered"></NavBar>
                </Route>

                <Route path='/' exact>
                  <Redirect to='/home'></Redirect>
                </Route>

                {/*
                <Route path='/home' exact component={}></Route>
                <Route path='/changelog/:changelogID' component={}></Route>
                <Route path='/downloads' exact component={}></Route>
                <Route path='/team' exact component={}></Route>
                <Route path='/pmd' exact component={}></Route>
                */}
              </Router>
            </th>
            <th className="bg-side"></th>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
