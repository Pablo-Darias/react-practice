import React, { useEffect } from 'react'
import { DangerButton } from './Button'

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
  return (
    <>
      <p>You've clicked the button {numberOfClicks} times</p> 
      <DangerButton onClick={onIncrement}>Click me!</DangerButton>
    </>
  )
}
