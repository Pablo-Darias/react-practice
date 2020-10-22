import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { CounterButton } from '../CounterButton'
import { CongratulationsMessage } from '../CongratulationsMessage'
import { DisplayIf } from '../DisplayIf'

export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, sethideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1)
  
  return (
    <>
      <h1>The Counter Button Page</h1>
      <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
        <CongratulationsMessage
          threshold={10}
          onHide={() => sethideMessage(true)}
        />
      </DisplayIf>
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>  
    </>
  );
}
