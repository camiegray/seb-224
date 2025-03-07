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
// const nums = [1, 2, 3, 5, 10]
// // const evens = []
// // nums.map((num) => {
// //     return num % 2 === 0
        
    
// // })
// // console.log(evens)


// const squared = nums.map((num) => {
//     return num**2
// })
// console.log(squared)

// const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David']
// const greatness = instructors.map((greats) => {
//     return  `${greats} is awesome`
// })
// console.log(greatness)




// const numbers = [100, 2, 5, 42, 99, 200, 7, 120]
// const numsOver50 = numbers.filter((number) => {
//     return number > 50

// })



// console.log(numsOver50)



// const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];
//  const notJerks = people.filter((person) => {
//     return person !== 'jerks'



//  })
//  console.log(notJerks)


 const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
  
//   const firstWhiteCar = cars.find((car) => {
//     return car.color === 'white';
//   })
//   // firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}
//   console.log(firstWhiteCar)
//   const missingCar = cars.find((car) => {
//     return car.color === 'black';
//   });
//   console.log(missingCar)
//   // missingCar = undefined





const blueIndex = cars.findIndex((car) => {
    return car.color === "blue"
   })
   console.log(blueIndex)
//   const missingCarIdx = cars.findIndex((car) => {
//     return car.color === 'black';
//   });
//   // missingCarIdx = -1
const blueInd = cars.some((car) => {
    return car.color === "blue"
   })
   console.log(blueInd)

   const blueIdx = cars.((car) => {
    return car.color === "blue"
   })
   console.log(blueIdx)




   const thingsInMyRoom = [
    'random elephant', 
    'random elephant', 
    'random elephant', 
    'random elephant'
  ];
  
  const isEverythingInMyRoomARandomElephant = /* Fill code in here */
  