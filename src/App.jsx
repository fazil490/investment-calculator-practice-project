import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInputs from "./components/UserInputs"

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
})

const isInputValid = userInputs.duration >= 1;

function handleChange(inputIdentifier, newValue) {
    setUserInputs((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }
    })
}

  return (
    <>
    <Header />
    <UserInputs handleInputChange={handleChange} userInput={userInputs} />
    {
      isInputValid ? <Results inputs={userInputs} /> : <p className="center">Please enter the duaration greater than zero.</p>
    }
    
    </>
  )
}

export default App