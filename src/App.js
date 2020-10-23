import React from 'react';
import Home from './components/Home';
import Login from './components/Login'
import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </HashRouter>
    
    </>
  );
}

export default App;
