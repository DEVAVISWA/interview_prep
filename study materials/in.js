// function permutations(str) {
//     const result = [];
    
//     function backtrack(remaining, current = '') {
//         if (remaining.length === 0) {
//             result.push(current);
//             return;
//         }

//         for (let i = 0; i < remaining.length; i++) {
//             const next = current + remaining[i];
//             const remainingChars = remaining.slice(0, i) + remaining.slice(i + 1);
//             backtrack(remainingChars, next);
//         }
//     }

//     backtrack(str);
//     return result;
// }

// // Example usage:
// const input = "123";
// const result = permutations(input);
// console.log(result.join('\n'));



// const sortByFrequency = (N,arr) =>{

// }
// console.log(sortByFrequency(11,[1,1,2,2,3,4,5,6,9,7,7]))


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())

const points = [40, 100, 1, 5, 25, 10,40,100]
console.log(points.sort((a,b)=>{
    console.log('a',a)
    console.log('b',b)
    console.log(b-a)
    return b-a
}))

