import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { CounterButton } from '../CounterButton'
import { CongratulationsMessage } from '../CongratulationsMessage'

export const CounterButtonPage = () => {
  const location = useLocation()
  const { startingValue } = parse(location.search)
  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
  const [hideMessage, sethideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1)
  
  return (
    <>
      <h1>The Counter Button Page</h1>
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
    </>
  );
}
