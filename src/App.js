import React from 'react';
import logo from './logo.svg';
import { Greeting } from './Greeting'
import { PeopleList } from './PeopleList'
import './App.css';

const people = [
  {
    name: 'John',
    age: 40,
    hairColor: 'brown'
  },
  {
    name: 'Helga',
    age: 45,
    hairColor: 'red'
  },
  {
    name: 'Dwayne',
    age: 55,
    hairColor: 'blonde'
  }
]

function App() {
  let adjective = 'cool';
  let url = 'https://reactjs.org'
  
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Pablo" numberOfMessages={5} />
        <PeopleList people={people} />
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => alert("HELLO")}>Click Me!</button>
        <p>
          This is {adjective}!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;