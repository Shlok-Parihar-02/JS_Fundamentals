var a;
// Temporal Dead Zone
console.log(a) 
// Temporal Dead Zone 
a = 100; 
// Above was variable hoisting where you keep a little tdz 
// best practive is to never keep any tdz.
// even better practice is to not use var.
console.log(a) 

// //////////////////////////////////////////////////////

var b = 10;
var b =12; // see how it gets reassigned..
console.log(b)

// //////////////////////////////////////////////////////

let a1 = 28;
// let a1 = 82; cant reassign error

function VarLetConst() {
    let a1 = 82 // can reassign here becuase of the block scope.
    console.log('inside VarLetConst', a1)
}

console.log(a1) // 28 becuase this is out of the VarLetConst Scope.

// //////////////////////////////////////////////////////

// const a; //cant keep it like this.. constant has not been initialized.

// cosnt a = 10; still error because a is already taken
function lol (e) {
const shlok = (20 * (e)) ; // now this is permanent nothing can be done.
return shlok;
}
//  but, 
console.log('prophecy', lol(2))


//  ////////////////////////////////////////////////

const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};
// console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
// console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
// both the above and below ones thorw an errror. 

console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!

// but if you wirte like this then no error.



let a9 = 5.843
let andy = Math.round(a9)
console.log(andy)
