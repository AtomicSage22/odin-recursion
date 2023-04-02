const merger = (left, right) => {
    const sortedArray = [];
    while(left.length && right.length){
        sortedArray.push(left[0] < right[0]? left.shift() : right.shift());
    }
    return [...sortedArray, ...left, ...right];
}


const mergeSort = (array) => {
    if (array.length < 2){
        return array;
    }
        
    const arrayLeft = array.slice(0, Math.round(array.length/2));
    const arrayRight = array.slice(Math.round(array.length/2));
    return merger(mergeSort(arrayLeft), mergeSort(arrayRight));
}



const array = [9, 4, 6, 3, 7, 8, 2, 1, 5];

console.log(mergeSort(array));