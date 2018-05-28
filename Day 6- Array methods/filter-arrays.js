// filter method in arrays is used to create a new array existing of elements those who pass a test condition usually passed as a function

var arr = [2,4,6,8,10];
var arr1 = [1,2,4,5,6,7,9];

function isArrayOfEvenNumbers(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var newEvenArrays = arr.filter(isArrayOfEvenNumbers);
var newEvenArray1 = arr1.filter(isArrayOfEvenNumbers);

console.log(newEvenArrays);
console.log(newEvenArray1);
