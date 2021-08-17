function numbersSquared1(number1, number2){
    return (number1 * number1 + number2 * number2) * (number1 * number1 + number2 * number2);
}

const result = numbersSquared1 (3, 4);
console.log (result)



const numbersSquared2 = function(number1, number2){
    return (number1 * number1 + number2 * number2) * (number1 * number1 + number2 * number2);
};

const result = numbersSquared2 (3, 4);
console.log (result);



const numbersSquared3 = (number1, number2) => {
    return (number1 * number1 + number2 * number2) * (number1 * number1 + number2 * number2);
};

const result = numbersSquared3 (3, 4)
console.log (result);