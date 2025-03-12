let array = [2, 11, 9, 8]



    // Loop through each element
  
    // store the current item value so it can be placed correctly
    // in the sorted portion of the array
  
    // Loop backward through the sorted portion of the array
    // and scoot everything over until you find the right place to
    // insert the value you're working with
  
    // Copy each item to the next slot over, as long as the value is smaller
    // than the item in the sorted array we're looking at (items[j] > value)
  
    // We can now insert the item in its sorted location
  
    // Remember to return the list!


  function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
      // Remove the current element from the array and store it in a variable
      // Splice returns an array of deleted items, so we take the first element [0]
      let placeholder = array.splice(i, 1)[0];
      // Initialize a variable to find the correct position to insert the placeholder
      let z = 0;
      // Loop through the sorted portion of the array (up to index i)
      // Find the position where the value in the sub-array is less than the placeholder
      while (z < i && array[z] < placeholder) {
        z++;
      }
      // Insert the placeholder at the correct position in the array
      array.splice(z, 0, placeholder);
    }
    return array;
  }
console.log(insertionSort(array))
  module.exports = insertionSort;
  