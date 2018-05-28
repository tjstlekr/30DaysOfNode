// reduce method in arrays  is used to reduce the array to a single value. This method executes the provided function
// for each value of the array and store the result in accumulator

arr = [5,5,8,7,6];
function multiplication(element, result) {
    console.log(element); // if you want to check the flow of each element(mulltiplicants ) for understanding purpose
    console.log(result); // use this console else not necessary
    result = element * result;
    return result;
}
var output = arr.reduce(multiplication);
console.log('result of multiplication of each element is : '+output);