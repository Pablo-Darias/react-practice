import React from 'react'
import { Button } from './Button'

export const CongratulationsMessage = ({ threshold, onHide }) => { 
  return (
    <>
      <h1>Congratulations! You've reached {threshold}</h1>
      <Button onClick={onHide}>Hide</Button>
    </>
  )
    
}
