import React from 'react';
import './App.css';
import Navpage from './Nav'
import Patient from './Patient'
import prescriptions from './Precriptions'
import Report from './Report'
import Home from './Home'
import Meds from './Meds'
import {BrowserRouter as Router  , Route} from 'react-router-dom'
import Food from './Food';

const navbar={
  background:'linear-gradient(to right bottom,#24c6dc, #514a9d)',
  height:'91px',
  paddingTop:'17px'
  

}

function App() {
  return (
    <Router >
      <Navpage/>
      <Route style={navbar} exact path = '/' component={Home}/>
      <Route style={navbar} path = '/runmeds' component={Meds}/>
      <Route style={navbar} path = '/food' component={Food}/>
      <Route style={navbar} path = '/patients' component={Patient}/>
      <Route style={navbar} path = '/precriptions' component={prescriptions}/>
      <Route style={navbar} path = '/reports' component={Report}/>
    </Router>
  );
}

export default App;
