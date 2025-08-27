function operate(operand1,operator,operand2){
    switch(operator){
        case '+':
            add(operand1,operand2);
        case '-':
            subtract(operand1,operand2);
        case '*':
            multiply(operand1,operand1);
        case '/':
            divide(operand1,operand2)
    }
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}