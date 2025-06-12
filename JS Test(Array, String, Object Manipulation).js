// // DOUBLE ALL THE NUMBERS 
// arr1 = [1,2,3,4]
// arr2 = [5,6,7,8,9,0]

// function double() {
//     let arr3 = arr1.map((x)=> x*2)
//     return console.log("wahts happening", arr3)
// }
// double()


/*  -------------------       02        -----------------------
Given two arrays, arr1 and arr2,
create a function that returns a new array 
containing only the numbers that are present 
in both arrays (the intersection). */


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function intersection(){
    let arr3 = arr1.filter((x)=> arr2.includes(x))
    return console.log("enemy", arr3)
}
intersection()


// union without methods
function join(){
    let arr3 = [...new Set([...arr1, ...arr2])]
    console.log("pain", arr3)
}
join()