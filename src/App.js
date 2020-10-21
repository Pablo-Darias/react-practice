import React, { useState } from 'react';
import logo from './logo.svg';
import { Greeting } from './Greeting'
import { PeopleList } from './PeopleList'
import { CounterButton } from './CounterButton'
import { CongratulationsMessage } from './CongratulationsMessage'
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
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, sethideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1)
  
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Pablo" />
        {
          hideMessage
            ? null
            : <CongratulationsMessage
              numberOfClicks={numberOfClicks}
              threshold={10}
              onHide={() => sethideMessage(true)}
            />
        }
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>  
      </header>
    </div>
  );
}

export default App;
