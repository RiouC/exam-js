
const average = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

console.log(average([1,2,3,4,5]));
console.log(average([1,9,12,-2,5]));
console.log(average([1,7,3,0,5]));
console.log(average([3,2,8,4,13]));
