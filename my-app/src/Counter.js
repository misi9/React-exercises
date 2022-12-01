import { useCounter } from "./useCounter";

export function Counter({initialValue = 0}) {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

  
  

  return (
    <div>
      <p>The value of the counter is {counter}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
