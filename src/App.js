import React from 'react';
import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Router>
        <Switch>  
          <Route path="/" component= {Home} exact />
        </Switch>
      </Router>
    </Router>
  );
}

export default App;
