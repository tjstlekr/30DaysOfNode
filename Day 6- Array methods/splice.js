
var arr = ['a', 'e', 'i', 'o'];
console.log(arr);

//Splice method is used in two ways i.e. to either add the elements into the array or remove elements from the array
//Adding elements into the array using splice

//Note := When you're adding elements to certain position already existing elements will get replaced.
console.log("Before performing addition splice \t"+arr)
arr.splice(1,2,'M', 'P');
console.log("Array after adding elements using splice() "+arr);


// Removing the elements using splice

arr.splice(1,2);
console.log("Array after removing elements using splice() \t"+arr);

