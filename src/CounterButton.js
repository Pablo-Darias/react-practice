import React from 'react'
import { Button } from './Button'

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
  return (
    <>
      <p>You've clicked the button {numberOfClicks} times</p> 
      <Button onClick={onIncrement}>Click me!</Button>
    </>
  )
}
