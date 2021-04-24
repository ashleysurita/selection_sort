def selectionSort(array: [int]) -> [int]:
    if not array or not len(array):
        return []    
    if len(array) == 1:
        return array
    
    for i in range(0, len(array)):
        lowest = i
        j = i
        while j < len(array):
            if array[j] < array[lowest]:
                lowest = j
            j+=1
        if array[i] != array[lowest]:
            [array[i], array[lowest]] = [array[lowest], array[i]]
            
    return array
        

# Test Cases
print(selectionSort([])) # []
print(selectionSort([1])) # [1]
print(selectionSort([3, 1, 2, 4])) # [1, 2, 3, 4]
print(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) # [-13, -10, 1, 3, 5, 8, 9, 32]
