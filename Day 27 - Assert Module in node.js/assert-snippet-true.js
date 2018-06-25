const assert = require('assert');
function demo(x,y,z) {
  let value = x + y + z;
  return value;
}

let output = demo(4,2,1);
console.log('Output : '+output);
let expectedOutput = 7;
console.log('expected output is '+ expectedOutput);
assert( output === expectedOutput, 'Test case is true so this will not  be printed');
