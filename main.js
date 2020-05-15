"use strict";
exports.__esModule = true;
var message = 'Welcome back!';
console.log(message);
var x = 10; // can be without init value
var y = 20; // always init value
var sum;
var title = 'Learn Typescript';
// boolean, number, string - primitive type
// Boolean, Number, String - object type
var isBeginner = true;
var total = 0;
var name = 'Bernie';
var sentence = "My name is " + name + ",\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22]; // tuple
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// Any type. Compiler doesn't check its type until we access it
var randomValue = 10;
randomValue = true;
randomValue = 10;
randomValue = 'value';
// Typescript won't trow any errors
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase; // Type assertion - casting
var a;
a = 10;
a = true;
var b = 20;
b = true;
console.log(b);
