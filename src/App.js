import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/myprojects' exact component={MyProjects}/>
        <Route path='/resume' exact component={Resume}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
