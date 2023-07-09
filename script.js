// Excercise 1
let destructureExample = (obj, arr) => {
    const { name, age } = obj;
    const [zero, , two, ...rest] = arr;

    let newObj = { name: name, age: age };

    return newObj;
};

const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];

console.log("------- Output Excercise 1 -------");
console.log(destructureExample(obj, arr));
console.log("----------------------------------");

// Excercise 2
let sumNumbers = (...numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
};

console.log("------- Output Excercise 2 -------");
console.log(sumNumbers(1, 2, 3, 4, 5));
console.log("----------------------------------");

// Excercise 3
let createGreeting = (name) => `Hello, ${name}! Welcome to our website.`;

console.log("------- Output Excercise 3 -------");
console.log(createGreeting("Dip"));
console.log("----------------------------------");

// Excercise 4
let isEven = (number) => (number % 2 == 0 ? "Even" : "Odd");

console.log("------- Output Excercise 4 -------");
console.log(isEven(7));
console.log("----------------------------------");

// Excercise 5
let multiply = (a, b) => a * b;

console.log("------- Output Excercise 5 -------");
console.log(multiply(4, 5));
console.log("----------------------------------");

// Excercise 6
let getLargestNumber = (n1, n2) => {
    return n1 && n2 ? n1 > n2 && n1 : n1 || n2;
};

console.log("------- Output Excercise 6 -------");
console.log(getLargestNumber(10, 5));
console.log("----------------------------------");

// Excercise 7
let getAddressCity = (address) => address?.city ?? "Unknown";

const address = { street: "123 Main St", country: "USA" };

console.log("------- Output Excercise 7 -------");
console.log(getAddressCity(address));
console.log("----------------------------------");

// Excercise 8
let doubleNumbers = (numbers) => {
    return numbers.map((number) => number * 2);
};

console.log("------- Output Excercise 8 -------");
console.log(doubleNumbers([1, 2, 3, 4, 5]));
console.log("----------------------------------");

// Excercise 9
let filterEvenNumbers = (numbers) => {
    return numbers.filter((number) => number % 2 == 0);
};

console.log("------- Output Excercise 9 -------");
console.log(filterEvenNumbers([1, 2, 3, 4, 5]));
console.log("----------------------------------");

// Excercise 10
let sumArray = (numbers) => {
    return numbers.reduce((prev, curr) => prev + curr, 0);
};

console.log("------- Output Excercise 10 -------");
console.log(sumArray([1, 2, 3, 4, 5]));
console.log("----------------------------------");

// Excercise 11
let sortNumbers = (numbers) => {
    return numbers.sort((a, b) => a - b);
};

console.log("------- Output Excercise 11 -------");
console.log(sortNumbers([1, 2, 3, 4, 5]));
console.log("----------------------------------");
