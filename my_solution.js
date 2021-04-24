
function selectionSort(array) {
    if(!array || !array.length) return []
    if(array.length === 1) return array
    
    for(let i = 0; i < array.length; i++){
        let lowest = i
        let j = i
        while(j < array.length){            
            if(array[j] < array[lowest]) lowest = j;
            j++
        }
        if(array[i] !== array[lowest]) [array[i], array[lowest]] = [array[lowest], array[i]]
    }    
    return array
}

// Test Cases
console.log(selectionSort([])) // []
console.log(selectionSort([1])) // [1]
console.log(selectionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
