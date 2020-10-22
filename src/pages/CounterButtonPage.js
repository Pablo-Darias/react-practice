import React, { useState } from 'react'
import { usePersistentState } from '../usePersistentState' 
import { CounterButton } from '../CounterButton'
import { CongratulationsMessage } from '../CongratulationsMessage'
import { DisplayIf } from '../DisplayIf'

export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = usePersistentState('numberOfClicks', 0, Number);
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
