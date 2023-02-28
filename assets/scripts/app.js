const defaultResult = 0;
let currentResult = defaultResult;
let logEntries =

function parsingUserInputValue(){
    return parseInt(userInput.value)
}
function writeToLog(
    operationIdentifier,
    prevResult,
    operationNUmber,
    newResult
) {
    const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNUmber,
    result: newResult
}

logEntries.push(logEntry)
console.log(logEntries)

}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber ){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);

}
// xd
function add() {
    const enteredNumber = parsingUserInputValue()
    const initialResult = currentResult
    currentResult += enteredNumber
    createAndWriteOutput("+", initialResult, enteredNumber)
    writeToLog("ADD", initialResult, enteredNumber,  )
} 


function subtract(){
    const enteredNumber = parsingUserInputValue()
    const initialResult = currentResult
    currentResult -=  enteredNumber
    createAndWriteOutput("-", initialResult, enteredNumber)
    writeToLog("subtract", initialResult, enteredNumber,  )
}

function multiply(){
    const enteredNumber = parsingUserInputValue()
    const initialResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput("*", initialResult, enteredNumber)
    writeToLog("multiply", initialResult, enteredNumber,  )
}

function devide(){
    const enteredNumber = parsingUserInputValue()
    const initialResult = currentResult
    currentResult /= enteredNumber
    createAndWriteOutput("/", initialResult, enteredNumber)
    writeToLog("devide", initialResult, enteredNumber,  )
}


addBtn.addEventListener("click", add )
divideBtn.addEventListener('click',devide)
multiplyBtn.addEventListener('click',multiply)

subtractBtn.addEventListener('click',subtract)





