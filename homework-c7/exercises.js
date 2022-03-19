exerciseOne();
exerciseTwo();
exerciseThree();

function exerciseOne() {
    let message = prompt('What is your favorite movie?');

    if (message === null || message === '') {
        console.log('No answer');
    } else {
        console.log(`My favorite movie is ${message}`);
    }

    message = prompt('What is your age?');
    const convertToNumber = Number(message);

    if (convertToNumber > 16) {
        console.log('You are eligible');
    } else {
        console.log(`You must be at least 16 years old. It seems you are ${convertToNumber}`);
    }
}

function exerciseTwo() {
    let operator = prompt('Enter an Operator: ');
    const onlyOperators = /^(\+|-|\*|\/|%)$/g;
    while (!operator.match(onlyOperators)) {
        operator = prompt(`${operator} is not an Operator. Enter the Operator again: `);
    }

    function isNumber(num) {
        // const restrictToNumbers = /^[0-9]{1,45}$/g;
        const restrictToNumbers = /^-?[0-9]\d*(\.\d+)?$/g;
        return num.match(restrictToNumbers);
    }

    let firstNumber = prompt('Enter your First number: ');
    while (!isNumber(firstNumber)) {
        firstNumber = prompt(`${firstNumber} is not a Number. Enter the First number again: `);
    }
    let firstConverted = Number(firstNumber);

    let secondNumber = prompt('Enter your Second number: ');
    while (!isNumber(secondNumber)) {
        secondNumber = prompt(`${secondNumber} is not a Number. Enter the Second number again: `);
    }
    let secondConverted = Number(secondNumber);

    function calculate(op, firstNr, secondNr) {
        let result;
        switch (op) {
            case '+':
                result = firstNr + secondNr;
                break;
            case '-':
                result = firstNr - secondNr;
                break;
            case '*':
                result = firstNr * secondNr;
                break;
            case '/':
                result = firstNr / secondNr;
                break;
            case '%':
                result = firstNr % secondNr;
                break;
        }
        return result;
    }

    const nrResult = calculate(operator, firstConverted, secondConverted);

    console.log(`${firstNumber} ${operator} ${secondNumber} = ${nrResult}`);
}

function exerciseThree() {
    const personName = prompt('What is your name?');

    const personAge = prompt('What is your age?');

    let currentYear = new Date().getFullYear();
    const bornYear = currentYear - personAge;

    console.log(`Hello ${personName}, I am only a console but it is nice to meet you.\nI have heard you are ${personAge} of age, that means you were born in ${bornYear}`);
}
