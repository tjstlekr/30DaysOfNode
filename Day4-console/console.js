var ws = require('fs');
const { Console } = require('console');
const output = ws.createWriteStream('./stdout.log');
const errOutput = ws.createWriteStream('./stderr.log');
// custom simple print
const print = new Console(output, errOutput);
//Now we can use it like console
const roll = 839147;
print.log('roll: %d', roll);
print.log('This will be stored in a file');


/// NOW We will learn Console.clear
// Use of cconsole.clear suppose if we want to clear stdout and see what is the next consoled body? then we will use console.clear
// using console.llcllear all the previous logged text will get clear

var value = 10;
console.log("Value : %d", value);
console.clear();
value *= value;
console.log("Value : %d", value);


//Available in current version
//This code counts the score of remo , rj and
//default score which goes to none of them
console.count('default');
console.count('remo');
console.count('rj');
console.count('remo');
console.count('remo');
console.count('rj');
console.count();



//Available in current version
//This code counts the occurrences of remo , rj and default

console.log('////////////////////////////////////////////////////////////////////')
console.count('default');
console.count('remo');  //remo=1
console.count('remo');  //remo=2
console.count('rj');    //rj=1
console.countReset('remo'); //remo = 1
console.count('remo');  //remo=2
console.countReset('remo'); //remo=1
console.count('rj');    //rj=2
console.count();        //default=2


//Console.time methods is used to start a timer which can be used to
console.time('division');
var x = 1;
var y = 2;
var result = x/y;

if(result == 2){
    console.log('Result: %d'.result);
} else {
    console.log("Result : " + result);
}
console.timeEnd('division');


if((result % 2) == 0){
    console.log("Result : %d" .result);
} else {
    console.warn("Warning : Decimal number");
}