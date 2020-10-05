import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyCollection from './pages/MyCollection'
import Search from './pages/Resume'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/mycollection' exact component={MyCollection}/>
        <Route path='/search' exact component={Search}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
