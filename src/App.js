import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  ControlledFormPage,
  UncontrolledFormPage,
  ProtectedPage,
  UserProfilePage,
  NotFoundPage
} from './pages/index' 
import { UserDataLoader } from './UserDataLoader'
import { Navbar } from './Navbar'
import { FormsNavbar } from './FormsNavbar'
import { ThemeContext } from './ThemeContext'
import './App.css';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <Router>
          <Navbar />
          <div className="App-header">
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
              <Route path="/user" >
                <UserDataLoader>
                  <UserProfilePage />
                </UserDataLoader>
              </Route>
              <Route path="/forms">
                <Router>
                  <FormsNavbar />
                  <Route path="/forms/controlled">
                    <ControlledFormPage />
                  </Route>
                  <Route path="/forms/uncontrolled">
                    <UncontrolledFormPage />
                  </Route>
                </Router>
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>    
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
