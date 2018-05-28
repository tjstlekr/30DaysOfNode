// every() method is used to check wheteher a condition is fullfilled by all elements or not. every method returns true
// if the condition is satisfied by all elements of the array otherwise every method will return false

var arr = [2,4,6,8,10];
var arr1 = [1,2,4,5,6,7,9];

function isArrayOfEvenNumbers(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var output = arr.every(isArrayOfEvenNumbers);
var output1 = arr1.every(isArrayOfEvenNumbers);
console.log("is arr have all the even numbers? : "+output);
console.log("is arr1 have all the even numbers?: "+output1);

