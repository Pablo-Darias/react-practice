import React from 'react'

export const CongratulationsMessage = ({ threshold, onHide }) => { 
  return (
    <>
      <h1>Congratulations! You've reached {threshold}</h1>
      <button onClick={onHide}>Hide</button>
    </>
  )
    
}
