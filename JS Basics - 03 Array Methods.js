ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

ar2 = ["Shlok", "Alok", "Prakash", "Wadia", "Sunil", "Anil"]

const ShoppingList = [
    {
        name: "hi-end Computer",
        price: "200000"
    },
    {
        name: "Himalayan 450",
        price: "450000"
    },
    {
        name: "LC 300",
        price: "20000000"
    },
    {
        name: "Cams and Gear",
        price: "100000"
    },
    {
        name: "Asset Building Company",
        price: "1000000"
    },
    {
        name: "Miscellaneous",
        price: "50000"
    },
    {
        name: "Garmin Watch",
        price: "50000"
    },
    {
        name: "iPhone 15 Pro",
        price: "150000"
    },
    {
        name: "Sony Alpha Camera",
        price: "250000"
    },
    {
        name: "DJI Drone",
        price: "120000"
    },
    {
        name: "MacBook Air",
        price: "130000"
    },
    {
        name: "Premium Bicycle",
        price: "85000"
    },
    {
        name: "Smart TV",
        price: "90000"
    },
    {
        name: "Gaming Console",
        price: "55000"
    },
    {
        name: "Electric Scooter",
        price: "95000"
    },
    {
        name: "Designer Sofa",
        price: "175000"
    },
    {
        name: "Modular Kitchen",
        price: "350000"
    },
    {
        name: "Home Theater System",
        price: "65000"
    },
    {
        name: "Luxury Watch",
        price: "450000"
    },
    {
        name: "Air Conditioner",
        price: "60000"
    },
    {
        name: "Fitness Treadmill",
        price: "75000"
    },
    {
        name: "High-end Smartphone",
        price: "95000"
    },
]

// 00 - Array Methods

// console.log(ShoppingList);
// const total = ShoppingList.values // this and above line do the same thing
// console.log(total)

// const awkad = ShoppingList.filter((t) => { f = t.price < 100000; return f }) // filter helps you to filter an array based on whatever you need filtered.
// console.log(awkad);

// const kidhar = ShoppingList.find((i) => i.price == 85000)
// console.log("ha yech", kidhar)


// 01 - FOREACH
// const names = ShoppingList.forEach((i) => i.name) // worng
// const names2 = ShoppingList.forEach((i) => console.log(i.name)) // corect
// console.log(names)
// console.log(names2)

// 02 - SOME EVERY
// const SaSsaValaBhaiya = ShoppingList.some((i) => { return i.price >= 200000 })
// console.log("lelo Bhaiya...", SaSsaValaBhaiya)

// const YeValaBhaiya = ShoppingList.every((i) => { return i.price <= 20000 })
// console.log("ok Bhaiya..?", YeValaBhaiya)

// const JutNaiBolegaBhaiya = ShoppingList.filter((i) => { return i.price > 800000 || i.name == "hi-end Computer"})
// console.log("ye sassa a Bhaiya...", JutNaiBolegaBhaiya)

/*
forEach is used for running a function on each element, but it does not collect or return results.
If you want an array of names, use map instead.
*/


// 03 - POP

// const poppin = ShoppingList.pop();
// console.log(poppin)


// 04 - PUSH
// const pushin = ShoppingList.push({name: "Food", price:"20000"})
// console.log(pushin) // just returns new length of the ShoppinList array.


// 05 - FOREACH
// let Shlok = ShoppingList.forEach((i) => console.log(i.name))
// console.log(Shlok);

// 06 - MAP & REDUCE

const maping = ShoppingList.map((i) => { let a = i.name; return a; });
console.log(maping); // new array names maping was created above..
console.log(maping.length)







/*

// Array Tutorial

// Creating arrays
let fruits = ['apple', 'banana', 'orange', 'mango', 'watermelon', 'pineapple', 'papaya', 'kiwi', 'strawberry', 'grape', 'pear', 'plum', 'cherry', 'blueberry', 'raspberry', 'blackberry', 'orange', 'pineapple', 'papaya', 'kiwi', 'strawberry', 'grape', 'pear', 'plum', 'cherry', 'blueberry', 'raspberry', 'blackberry'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log('Original arrays:', fruits, numbers);

// Array length
console.log('Array length of fruits:', fruits.length);
console.log('Array length of numbers:', numbers.length);

// Accessing elements
console.log('First element:', fruits[0]);
console.log('Last element:', fruits[fruits.length-1]);

// Adding elements
fruits.push('grape');
console.log('After push:', fruits);

fruits.unshift('pear');
console.log('After unshift:', fruits);

// Removing elements
fruits.pop();
console.log('After pop:', fruits);

fruits.shift();
console.log('After shift:', fruits);


fruits.splice(1, 1, 'kiwi', 'melon'); // Remove 1 element at index 1, add 2 new elements
console.log('After splice:', fruits);

// Slicing - get portion of array
let slicedFruits = fruits.slice(1, 3); // Get elements from index 1 to 2
console.log('Sliced array:', slicedFruits);

// Concatenating arrays
let moreFruits = ['pineapple', 'papaya'];
let allFruits = fruits.concat(moreFruits);
console.log('Concatenated arrays:', allFruits);

// Finding elements
console.log('Index of orange:', fruits.indexOf('orange')); // Returns index or -1 if not found
console.log('Includes kiwi?:', fruits.includes('kiwi')); // Returns true/false

// Array transformations
// Map - creates new array by transforming each element
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Mapped array (uppercase):', upperFruits);

// Filter - creates new array with elements that pass test
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Filtered array (length > 5):', longFruits);

// Remove duplicates using filter
let uniqueFruits = fruits.filter((fruit, index, array) => array.indexOf(fruit) === index);
console.log('Array with duplicates removed:', uniqueFruits);

// Reduce - reduces array to single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers using reduce:', sum);

// Sorting
fruits.sort(); // Alphabetical order
console.log('Sorted fruits:', fruits);

numbers.sort((a, b) => b - a); // Descending order
console.log('Sorted numbers:', numbers);

// Reversing
fruits.reverse();
console.log('Reversed array:', fruits);

// Join elements into string
console.log('Joined with commas:', fruits.join(', '));

// forEach - iterate over elements
console.log('forEach loop:');
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// some/every - test conditions
console.log('Some fruits longer than 5 chars:', fruits.some(fruit => fruit.length > 5));
console.log('All fruits longer than 3 chars:', fruits.every(fruit => fruit.length > 3));

// find/findIndex - find first matching element
console.log('First fruit with "e":', fruits.find(fruit => fruit.includes('e')));
console.log('Index of first fruit with "e":', fruits.findIndex(fruit => fruit.includes('e')));
*/