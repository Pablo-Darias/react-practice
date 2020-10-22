import React, { useContext, useState } from 'react';
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
} from './pages/index';
import { ThemeContext } from './ThemeContext'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FormsNavbar } from './FormsNavbar'
import './App.css';

function App() {
  const [theme, setTheme] = useState(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <ThemeContext.Provider value={theme}>
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
                <UserProfilePage />
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
          <Footer onToggle={toggleTheme} theme={theme}/>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
