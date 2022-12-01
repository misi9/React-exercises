import {useState} from 'react'

export function useCounter(initialValue = 0){
  const [counter, setCounter] = useState(initialValue)

  function handleIncrementCounter() {
    setCounter((c) => c + 1)
  }

  function handleDecrementCounter() {
    setCounter((c) => c - 1)
  }
  function handleResetCounter() {
    setCounter(initialValue)
  }

  return {
      counter: counter,
      onIncrement: handleIncrementCounter,
      onDecrement: handleDecrementCounter,
      onReset: handleResetCounter
  }
}