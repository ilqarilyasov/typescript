export {}
let message = 'Welcome back!';
console.log(message);

let x = 10; // can be without init value
const y = 20; // always init value

let sum: number;
const title = 'Learn Typescript';

// boolean, number, string - primitive type
// Boolean, Number, String - object type
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Bernie';

let sentence: string = `My name is ${name},
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22]; // tuple

enum Color {  // Integer
    Red = 5,
    Green,
    Blue
};

let c: Color = Color.Green;
console.log(c);

// Any type. Compiler doesn't check its type until we access it
let randomValue: any = 10;
randomValue = true;
randomValue = 10;
randomValue = 'value';

// Typescript won't trow any errors
let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

(myVariable as string).toUpperCase; // Type assertion - casting

let a;
a = 10;
a = true;

let b = 20;
b = true;
console.log(b)