/*Callback Hell
The level when so many callbacks are nested within other callbacks making it difficult to debug or understand the code. Callback hell is also known as Pyramid of Doom.
*/

// Example

fxn1(function(){
   fxn2(function(){
       fxn3(function(){
           fxn4(function(){
       fxn5(function(){
         fxn6(function(){
           fxn7(function(){
             fxn8(function(){
               ....


             });
           });
         });
       });
     });
       });
   });
});

// Code ends here


/*Avoiding callback hell
  This is important. Please read each of these topic individually
   Modularization : By making our code as much modular as possible, callback hell can be avaoided.
   Promises : We can use the concepts of promises to avoid callback hell.
   Async.js : Async is a very powerful module on npm , which can be used to avoid callback hell.
   Chaining promises : We can avoid callback hell by chaining promises.
*/
