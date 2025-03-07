// const array = ['apple','banana','orange'];

// const mappedArray = array.map((element, index, array) => {
//   return `element is: ${element}, index is: ${index}, array is ${array}`;
// });

// console.log(mappedArray)
// // [ 'element is: apple, index is: 0, array is apple,banana,orange',
// //   'element is: banana, index is: 1, array is apple,banana,orange',
// //   'element is: orange, index is: 2, array is apple,banana,orange' ]
// const animals = ['chicken', 'goat', 'pig', 'sheep', 'cow'];

// const oddAnimals = animals.filter((animal, index) => {
//   if(index % 2) return animal;
// });

// console.log(oddAnimals);




// const squared = nums.map((num) => {
//   return num * num
// });

// for (let i = 0; i <nums.length, i==) {
//     squared.push(nums[i]*nums[1] )
// }
// squared --> [1, 4, 9]
// nums.forEach((num)=>{
//     squared.push(n^=2)
//     console.log(squared)
const nums = [1, 2, 3, 5, 10]
const evens = []
nums.map((num) => {
    if (num % 2 === 0) {
        evens.push(num)
    }
})
console.log(evens)


const squared = nums.map((num)=>{
    return num^2
})
console.log(squared)