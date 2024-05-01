// let inputArr = [1, 2, [3, 4, [5, 6]], [7, 8, 9, [10, [11, 12]]], [13]];
// console.log(inputArr.flat(3))
// console.log('deva')

// const flat = (inputArr) => {
//   let outputArr = [];
//   for (val of inputArr) {
//     // console.log(val)
//     if (Array.isArray(val)) {
//       let x = flat(val);
//       outputArr = [...outputArr, ...x];
//     } else {
//       outputArr.push(val);
//     }
//   }
//   return outputArr;
// };
// flat(inputArr);
// console.log(flat(inputArr))

// let inputArr = [1, 2, [3, 4, [5, 6]], [7, 8, 9, [10, [11, 12]]], [13]];
// const flat = (inputArr) => {
//     let outputArr=[]
//     for(value of inputArr){
//         if(Array.isArray(value)){
//             let x= flat(value)
//             outputArr=[...outputArr,...x]
//         } else {
//             outputArr.push(value)
//         }
//     }
//     return outputArr
// }
// console.log(flat(inputArr))

// let inputArr = [1, 2, [3, 4, [5, 6]], [7, 8, 9, [10, [11, 12]]], [13]];
// function flatArr(inputArr) {
//     // log(inputArr);
//     let outputArr=[]
//     for(let values of inputArr){
//         if(Array.isArray(values)){
//             let x= flatArr(values)
//             outputArr=[...outputArr,...x]
//         } else {
//             outputArr.push(values)
//         }
//     }
//     return outputArr
// }
// console.log(flatArr(inputArr))

// let str= 'devaviswa'

// function reversal(str){
//     let array= str.split('')
//     let word=''
//     // console.log(array)
//     for(let i= array.length-1; i>=0;i--){
//         word += array[i]
//     }
//     console.log(word)
// }
// reversal('devaviswa ganesan')

// function reversal(str) {
//     let arr= str.split(' ').map((v)=>{
//        return v.split('').reverse().join('')
//     })
//     console.log(arr.join(' '))
// }
// reversal('deva viswa ganesan')

function reverseString(str) {
  let rev= str.split(' ').map((v)=>{
    return v.split('').reverse().join('')
  }).join(' ')
  console.log(rev)
}
reverseString("deva viswa ganesan")

// first letter caps
function firstCaps(str){
    let arr= str.split(' ')
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    console.log(arr.join(' '))
}
firstCaps('deva viswa ganesan')

// function factorial(n) {
//     let fact= 1
//     for(let i=1; i<=n;i++){
//         fact *= i
//     }
//     console.log(fact)
// }
// factorial(15)

// function pali(str){
//     let rev= str.split('').reverse().join('')
//     // console.log(rev)
//     if(str===rev){
//         console.log('is palindrome')
//     } else {
//         console.log('not palindrome')
//     }
// }
// pali('racecar')

//vowels

// function vowels(str){
//     let vowels= "aeiouAEIOU"
//     let count=0
//     for(let k of str){
//         if(vowels.includes(k)){
//             count ++
//         }
//     }
//     console.log(count)
// }
// vowels('aeilmnA')

// function numberOfVowel(str) {
//   const count = str.match(/[aeiouAEIOU]/g).length;
//   console.log(count);
// }
// numberOfVowel("ant Aunt");

// function vowels(str){
//     const vowels= str.match(/[aeiou]/gi)
//     const length= vowels.length
//     console.log(vowels)
//     console.log(length)
// }
// vowels('Aeilmn')

//sum of numbers
// function sum(n){
//     let arr= n.toString().split('')
//     // let count = 0
//     let sum = arr.reduce((acc,val)=>{
//         return acc+= +val
//     },0)
//     console.log(sum)
// }
// sum(1568)

//amstrong
// function ams(n){
//     let arr=  n.toString().split('')
//     let power=arr.length
//     let sum=0
//     // console.log(power)
//     for(let i=0;i<power;i++){
//         // console.log(arr[i])
//         sum+=Math.pow(arr[i],power)
//     }
//     console.log(sum===n)
// }
// ams(8208)

// function fibonacci(n){
//     if(n<=1){
//         return n
//     } else{
//         return fibonacci(n-1) + fibonacci (n-2)
//     }
// }
// console.log(fibonacci(6))

// function longest(words){
//     let str= words.split(' ')
//     let longest=''
//     // console.log(str)
//     for(let i=0;i<str.length;i++){
//         // console.log(str[i])
//         if(str[i].length>longest.length){
//             longest= str[i]
//         }
//     }
//     console.log(longest)
// }
// longest('cow boy beepo knocking on the heavens door')

//API FECTH CALL

// var value;
// function dataHandling() {
//   console.log(value);
//   const mainDiv = document.getElementById("main");
//   let tabel = document.createElement("table");
//   mainDiv.append(tabel);
//   let keys = Object.keys(value[0]);
//   console.log(keys);
//   let tHead = `<tr>${keys
//     .map((v) => {
//       return `<td>${v}</td>`;
//     })
//     .join("")}</tr>`;
//   //   console.log(tHead);
//   const tBody = value.map((val) => {
//     return `<tr>${keys
//       .map((va) => {
//         return `<td>${val[va]}</td>`;
//       })
//       .join("")}</tr>`;
//   });
//   console.log(tBody);
//   tabel.innerHTML = tHead + tBody;
// }

// fetch(
//   "https://cors-anywhere.herokuapp.com/gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data)
//     value = data;
//     dataHandling();
//   });

// fetch(
//   '"https://cors-anywhere.herokuapp.com/gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json'
// )
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });


// let data;
// function apiFetch() {
//   console.log(data);
  
// }

// fetch(
//   "https://cors-anywhere.herokuapp.com/gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"
// )
//   .then((res) => res.json())
//   .then((res) => {
//     // console.log(res);
//     data = res;
//     apiFetch();
//   });