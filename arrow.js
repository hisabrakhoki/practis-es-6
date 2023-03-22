// function doubleit(num){
//     return num*2;
// }
// const result = doubleit(5);
// console.log(result);

// const doubleit = function(num){
//     return num * 2;
// }
// const result = doubleit(15);
// console.log(result);

// const doubleit = num => num*3;
// const result = doubleit(15);
// console.log(result);

// const add = (x, y) => x+y;
// const result = add(15, 20);
// console.log(result);

const doMath = (x, y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result
}
const result = doMath(7, 5);
console.log(result);