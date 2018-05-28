
var arr = [2,4,6,8,10];
var arr1 = [1,2,4,5,6,7,9];

function isArrayOfEvenNumbers(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


// find method in arrays returns the first value which passes a test condition
// if no element satisfies the condition then it will return undefined

var findOutput = arr.find(isArrayOfEvenNumbers);
console.log(findOutput);
