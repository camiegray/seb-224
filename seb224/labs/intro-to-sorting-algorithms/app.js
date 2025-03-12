// Original array
let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

// Function to shuffle array (Fisher-Yates shuffle)
function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create a random array
let randomCards = shuffleArray(cards);
console.log("Random array:", randomCards);

// 1. Bubble Sort
function bubbleSort(arr) {
    let array = [...arr];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}
console.log("Bubble Sort:", bubbleSort(randomCards));

// 2. Selection Sort
function selectionSort(arr) {
    let array = [...arr];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
}
console.log("Selection Sort:", selectionSort(randomCards));

// 3. Insertion Sort
function insertionSort(arr) {
    let array = [...arr];
    let len = array.length;
    for (let i = 1; i < len; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}
console.log("Insertion Sort:", insertionSort(randomCards));

// 4. Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let array = [...arr];
    let pivot = array[Math.floor(array.length / 2)];
    let left = [];
    let right = [];
    let equal = [];
    
    for (let element of array) {
        if (element < pivot) left.push(element);
        else if (element > pivot) right.push(element);
        else equal.push(element);
    }
    return [...quickSort(left), ...equal, ...quickSort(right)];
}
console.log("Quick Sort:", quickSort(randomCards));

// 5. Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let array = [...arr];
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
console.log("Merge Sort:", mergeSort(randomCards));

// 6. JavaScript's built-in sort
function builtInSort(arr) {
    return [...arr].sort((a, b) => {
        // Custom comparison for mixed types
        if (typeof a === 'number' && typeof b === 'number') return a - b;
        if (typeof a === 'string' && typeof b === 'string') return a.localeCompare(b);
        if (typeof a === 'number') return -1;
        return 1;
    });
}
console.log("Built-in Sort:", builtInSort(randomCards));