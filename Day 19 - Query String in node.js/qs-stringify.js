
const qs = require('querystring');

let value_json = qs.stringify({ id: 1, name: ['abc', 'njera'], tutorial: '30days of node', creator : 'nodejsera' });
console.log(value_json);

let value_json_2 = qs.stringify({ id: 2, name: ['def', 'njera2'], tutorial: '30days of node', creator : 'nodejsera' },';');
console.log("Changing the default 'sep' from '&' to ';'. An example is shown below:");
console.log(value_json_2);

let value_json_3 = qs.stringify( {id: 3, name: ['hij', 'njera3'], tutorial: '30days of node', creator : 'nodejsera' },';',':');
console.log("Changing the default 'eq' from '=' to ':'. An example is shown below:")
console.log(value_json_3);
