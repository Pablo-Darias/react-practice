import React, { useEffect } from 'react'

export const CongratulationsMessage = ({ numberOfClicks, threshold, onHide }) => {

  useEffect(() => {
    return () => console.log("Congratulations unmounting!")
  }, [])
  
  return numberOfClicks >= threshold
    ?
    <>
      <h1>Congratulations! You've reached {numberOfClicks}</h1>
      <button onClick={onHide}>Hide</button>
    </>
    : null
}
