"use strict";
let currentValue = '';
let operatorValue = '';
let firstValue = '';
let result;
const displayResult = () => {
    document.getElementById("output").value = currentValue || '0';
};
const handleNumber = (num) => {
    currentValue += num;
    displayResult();
};
const handleSign = (operand) => {
    if (currentValue === '' && operand == '-') {
        currentValue = operand;
        return displayResult();
    }
};
const handleOperator = (operand) => {
    if (currentValue === '' && operand == '/') {
        return displayResult();
    }
    if (currentValue === '' && operand == '*') {
        return displayResult();
    }
    if (currentValue === '' && operand == '-') {
        currentValue = operand;
        return displayResult();
    }
    if (currentValue !== '') {
        operatorValue = operand;
        firstValue = currentValue;
        currentValue = '';
        displayResult();
    }
};
const handlePercentage = (percent) => {
    result = (+currentValue * 0.01).toString();
    currentValue = result;
    displayResult();
};
const handleClear = () => {
    currentValue = '';
    firstValue = '';
    operatorValue = '';
    displayResult();
};
const handleCalculation = () => {
    if (firstValue !== '' && operatorValue !== '' && currentValue !== '') {
        switch (operatorValue) {
            case '+':
                result = (+firstValue + (+currentValue)).toString();
                break;
            case '-':
                result = (+firstValue - (+currentValue)).toString();
                break;
            case '*':
                result = (+firstValue * (+currentValue)).toString();
                break;
            case '/':
                result = (+firstValue / (+currentValue)).toString();
                break;
            default:
                break;
        }
        currentValue = result;
        firstValue = '';
        operatorValue = '';
        displayResult();
    }
};
