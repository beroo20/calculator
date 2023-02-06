const defaultResult = 0;
let currentResult = defaultResult;

function parsingUserInputValue(){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber ){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);

}

function add() {
    const enteredNumber = parsingUserInputValue()
    const initialResult = currentResult
    currentResult = currentResult + enteredNumber
createAndWriteOutput("+", initialResult, enteredNumber)
} 

function subtract(){
    const enteredNumber = parsingUserInputValue()
    const initialResult = currentResult
    currentResult = currentResult - enteredNumber
    createAndWriteOutput("-", initialResult, enteredNumber)

}

function multiply(){
    const enteredNumber = parsingUserInputValue()
    const initialResult = currentResult
    currentResult = currentResult * enteredNumber
    createAndWriteOutput("*", initialResult, enteredNumber)
}

function devide(){
    const enteredNumber = parsingUserInputValue()
    const initialResult = currentResult
    currentResult = currentResult / enteredNumber
    createAndWriteOutput("/", initialResult, enteredNumber)
}


addBtn.addEventListener("click", add )
divideBtn.addEventListener('click',devide)
multiplyBtn.addEventListener('click',multiply)

subtractBtn.addEventListener('click',subtract)





