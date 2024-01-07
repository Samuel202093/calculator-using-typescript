let currentValue:string = ''
let operatorValue:string = ''
let firstValue:string = ''
let result:string



const displayResult = ()=>{
    (document.getElementById("output") as HTMLInputElement).value = currentValue || '0'   
}



const handleNumber = (num:string)=>{
    currentValue += num
    displayResult()
}

const handleSign = (operand:string)=>{
    if(currentValue === '' && operand == '-'){
        currentValue = operand
        return displayResult()
    }
}




const handleOperator = (operand:string)=>{
    if (currentValue === '' && operand == '/') {
        return displayResult()
    }
    if (currentValue === '' && operand == '*') {
        return displayResult()
    }
    if(currentValue === '' && operand == '-'){
        currentValue = operand
        return displayResult()
    }
    if (currentValue !== '') {
        operatorValue = operand
        firstValue = currentValue
        currentValue = ''
        displayResult()
    }
}


const handlePercentage = (percent:string)=>{
   result = (+currentValue * 0.01).toString()
   currentValue = result
   displayResult()
}



const handleClear = ()=>{
    currentValue =''
    firstValue =''
    operatorValue = ''
    displayResult()
}



const handleCalculation = ()=>{
    if (firstValue !== '' && operatorValue !== '' && currentValue !== '') {
        switch(operatorValue){
            case '+':
                result = (+firstValue + (+currentValue)).toString()
                break;

            case '-':
                result = (+firstValue - (+currentValue)).toString()
                break;

            case '*':
                result = (+firstValue * (+currentValue)).toString()
                break;

            case '/':
                result = (+firstValue / (+currentValue)).toString()
                break;

            default:
                break;
        }

        currentValue = result
        firstValue = ''
        operatorValue = ''
        displayResult()
    }

}