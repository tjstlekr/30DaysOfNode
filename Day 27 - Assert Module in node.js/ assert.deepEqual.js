const assert = require('assert');
const a = 10;
const b = '10';
const c = 10.25;
//Case 1
assert.deepEqual(a,b, "Nothing printed because they are using == for comparison");
//Case 2
assert.deepEqual(a,c, "Error because values doesn't match");
