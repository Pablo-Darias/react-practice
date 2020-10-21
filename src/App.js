import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage
} from './pages/index' 
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to counter page!</Link>
        <Link to="/people-list">Go to people list page!</Link>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/counter">
            <CounterButtonPage />
          </Route>
          <Route path="/people-list">
            <PeopleListPage />
          </Route>
          <Route path="/protected" >
            <ProtectedPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
