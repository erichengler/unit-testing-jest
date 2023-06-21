// = 0 will default num2 to 0 if it doesnt exist
function addNumbers(num1, num2 = 0) {

    // convert to numbers to pass strings test
    num1 = Number(num1)
    num2 = Number(num2)

    // check if either number is NaN, and return accordingly
    if ( isNaN(num1) || isNaN(num2) ) {
        return NaN;
    } else {
        return num1 + num2;
    }
}

module.exports = {
    addNumbers,
}