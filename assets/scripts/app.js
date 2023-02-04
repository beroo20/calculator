const defaultResult = 0;
let currentResult = defaultResult;

function parsingUserInputValue(){
    return parseInt(userInput.value)
}


function add() {
    const enteredNumber = parsingUserInputValue()
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber
    outputResult(currentResult, calcDescription);

} 
addBtn.addEventListener("click", add )




