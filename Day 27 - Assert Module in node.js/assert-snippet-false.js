const assert = require('assert');

function demo (x,y,z) {
  return x+y+z;
}

let output = demo(1,3,6);
console.log('Output' + output);
let expectedOutput = 15;
console.log('Expected output is '+ expectedOutput);
assert(output === expectedOutput, 'This is not what we expected');
