import React, { useState, useEffect } from 'react'

import './App.css'
import Button from './components/Button'
import StyledDisplay from './components/styles/StyledDisplay'
import StyledWrapper from './components/styles/StyledWrapper'
import StyledButtonGrid from './components/styles/StyledButtonGrid'
import { calculate, HIGHER_ORDER_OPERATIONS_ARRAY, OPERATIONS_ARRAY } from './helpers/helpers'

function App() {

  // TODO: Refactor state to use in a reducer
  const [display, setDisplay] = useState("0")
  const [numbers, setNumbers] = useState<string[]>([])
  const [operators, setOperators] = useState<string[]>([])
  const [isFirstNumber, setIsFirstNumber] = useState(true)

  const handleClick = (value: string) => () => {
    if (OPERATIONS_ARRAY.includes(value)) {
      handleOperations(value)
    } else {
      handleNumbers(value)
    }
  }

  const handleOperations = (value: string) => {
    if (!numbers.length) {
      return
    } 
    setOperators((operators) => [...operators, value])
    setIsFirstNumber(false)
  }

  const handleNumbers = (value: string) => {
    let mostRecentNumber = numbers[numbers.length - 1]

    if (isFirstNumber && display === "0") {
      setDisplay(value)
      setNumbers([value])
    } else if (isFirstNumber) {
        mostRecentNumber = mostRecentNumber + value

        const newNumbers = [...numbers]
        newNumbers[newNumbers.length - 1] = mostRecentNumber
        setNumbers(newNumbers)
        setDisplay(mostRecentNumber)
    } else {
      setDisplay(value)
      setNumbers(numbers => [...numbers, value])
      setIsFirstNumber(true)
    }
  }

  const toggleSign = () => {
    if (!numbers.length) {
      return
    }
    const newNumbers = [...numbers]
    let mostRecentNumber = newNumbers[newNumbers.length - 1]
    mostRecentNumber = (parseFloat(mostRecentNumber) * -1).toString();
    newNumbers[newNumbers.length - 1] = mostRecentNumber
    setNumbers(newNumbers)
    setDisplay(newNumbers[newNumbers.length - 1])
  }

  const convertToPercentage = () => {
    if (!numbers.length) {
      return
    }
    const newNumbers = [...numbers]
    let mostRecentNumber = newNumbers[newNumbers.length - 1]

    mostRecentNumber = (parseFloat(mostRecentNumber) / 100).toString();
    newNumbers[newNumbers.length - 1] = mostRecentNumber
    setNumbers(newNumbers)
    setDisplay(newNumbers[newNumbers.length - 1])
  }

  const convertToFloat = () => {
    if (!numbers.length) {
      return
    }
    const newNumbers = [...numbers]
    let mostRecentNumber = newNumbers[newNumbers.length - 1]

    if (mostRecentNumber.includes(".")) {
      return
    }

    mostRecentNumber = mostRecentNumber + "."
    newNumbers[newNumbers.length - 1] = mostRecentNumber
    setNumbers(newNumbers)
    setDisplay(newNumbers[newNumbers.length - 1])
  }

  const tally = () => {
    let result = 0
    result = calculate[operators[0]](parseFloat(numbers[0]), parseFloat(numbers[1]))
    setOperators([])
    setNumbers([result.toString()])
    setDisplay(result.toString())
  }

  const handleAllClear = () => {
    setDisplay("0")
    setNumbers([])
    setOperators([])
  }

  // TODO: Abstract the code block into a switch statement, based upon which operator is chosen, and integrate its functionality with the reducer referred to at the top of the app

  // performs initial calculation and renders result to display before equal sign is clicked
  useEffect(() => {
    let initialResult = 0;
    let result = 0
    const mostRecentOperation = operators[operators.length - 1]

    // This code block runs when the first operator is addition / subtraction and the second operator is multiplication / division
    if (operators.length === 2 && numbers.length === 3) {
      // we calculate the result of the last two numbers and the second operator and assign it to the inital result variable
      initialResult = calculate[operators[1]](parseFloat(numbers[1]), parseFloat(numbers[2]))
      const newNumbers = [...numbers]
      // we remove the last two numbers from the array and add the initial result
      newNumbers.splice(-2)
      newNumbers.push(initialResult.toString())

      // we remove the second operator from the operators array, setState, and render result to the screen
      setOperators((operators) => operators.filter((_, index) => index === 0))
      setNumbers(newNumbers)
      setDisplay(initialResult.toString())
    }

    if (operators.length === 2 && HIGHER_ORDER_OPERATIONS_ARRAY.includes(mostRecentOperation)) {
      return
    } else if (operators.length === 2) {
      // if both operators are lower order operations, then calculate and render results to the display
       result = calculate[operators[0]](parseFloat(numbers[0]), parseFloat(numbers[1]))
       setOperators((operators) => operators.filter((_, index) => index !== 0))
       setNumbers([result.toString()])
       setDisplay(result.toString())
    }
  },[operators, numbers])
  
  return (
    <StyledWrapper>
      <StyledDisplay>{display}</StyledDisplay>
        <StyledButtonGrid>
          <Button className="button" onClick={handleAllClear} variant="miscellaneous">AC</Button>
          <Button className="button" onClick={toggleSign} variant="miscellaneous">+/-</Button>
          <Button className="button" onClick={convertToPercentage}variant="miscellaneous">%</Button>
          <Button className="button" onClick={handleClick("/")} variant="operator">/</Button>
          <Button className="button" onClick={handleClick("7")} variant="number">7</Button>
          <Button className="button" onClick={handleClick("8")} variant="number">8</Button>
          <Button className="button" onClick={handleClick("9")} variant="number">9</Button>
          <Button className="button" onClick={handleClick("X")} variant="operator">X</Button>
          <Button className="button" onClick={handleClick("4")} variant="number">4</Button>
          <Button className="button" onClick={handleClick("5")} variant="number">5</Button>
          <Button className="button" onClick={handleClick("6")} variant="number">6</Button>
          <Button className="button" onClick={handleClick("-")} variant="operator">-</Button>
          <Button className="button" onClick={handleClick("1")} variant="number">1</Button>
          <Button className="button" onClick={handleClick("2")} variant="number">2</Button>
          <Button className="button" onClick={handleClick("3")} variant="number">3</Button>
          <Button className="button" onClick={handleClick("+")} variant="operator">+</Button>
          <Button className="zeroButton" onClick={handleClick("0")} variant="number">0</Button>
          <Button className="button" onClick={convertToFloat} variant="number">.</Button>
          <Button className="button" onClick={tally} variant="number">=</Button>
        </StyledButtonGrid>
    </StyledWrapper>
  )
}

export default App
