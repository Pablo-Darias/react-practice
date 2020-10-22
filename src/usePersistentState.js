import { useState, useEffect } from 'react'

export const usePersistentState = (storagekey, defaultValue, Type) => {
   const [state, setState] = useState(
    Type(localStorage.getItem(storagekey)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storagekey, state)
  }, [state])

  return [state, setState]
}