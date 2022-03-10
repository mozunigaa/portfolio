import React from 'react';
import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Router>
        <Switch>  
          <Route path="/" component= {Home} exact />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
