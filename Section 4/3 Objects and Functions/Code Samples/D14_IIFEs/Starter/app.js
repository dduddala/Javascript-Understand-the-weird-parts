// function statement
function greet(name) {
    console.log('Hello ' + name);   
}
greet('John');

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    
    return 'Hello ' + name;
    
}('John'); // invoke and pass the param immediately after creation

console.log(greeting);

//IIFE

var firstname = 'John';
//cannot be anonymous..thinks it as function statement

(function (name) {
	var greeting = 'Inside IIFE: Hello';
	console.log(greeting + ' ' + name);
}(firstname)); //IIFE