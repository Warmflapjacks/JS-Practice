let add7 = (number) => {
    return console.log(number + 7);
}

let multiply = (firstNumber, secondNumber) => {
    return console.log(firstNumber * secondNumber);
}

let capitalize = (aString) => {
    let newString = aString.toLowerCase();
    console.log(newString);
    let firstLetter = newString[0].toUpperCase();
    let finalString = firstLetter.concat("",newString.slice(1));
    return console.log(finalString);
}


add7(13);
multiply(2, 5);
capitalize("hAPPy NEW year!!!!!!");