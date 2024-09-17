import { useState, useEffect } from 'react'

function Hooks() {
  const [counter, setCounter] = useState(15)
  const [increment, setIncrement] = useState(0)

  useEffect(() => {
    if (increment > 0) {
      setCounter(prevCounter => prevCounter + 1)
      setIncrement(prevIncrement => prevIncrement - 1)
    }
  }, [increment])

  const addValue = () => {
    setIncrement(4)
  }

  const removeValue = () => {
    setCounter(prevCounter => prevCounter - 1)
  }

  return (
    <>
      <h1>First Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default Hooks
