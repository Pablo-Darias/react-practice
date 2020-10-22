import React, { useEffect } from 'react'
import { Button } from './Button'

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
  useEffect(() => {
    console.log('useEffect function called!')
    return () => console.log('unmountign')
  }, [])

  return (
    <>
      <p>You've clicked the button {numberOfClicks} times</p> 
      <Button onClick={onIncrement}>Click me!</Button>
    </>
  )
}
