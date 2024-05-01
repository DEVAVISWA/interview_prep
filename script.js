//ARRAY SORTING

// let arr = [1, 22222, 15,-3,-7];
// arr.sort((a,b) => a-b );
// console.log(arr)

// let num = [1, 2, 89, 9, 99999, 1000];
// num.sort((a, b) => (a > b ? -1 : 1));
// console.log(num);

// let arr = [
//   { name: "aaa", age: 25 },
//   { name: "jhge", age: 30 },
//   { name: "sdfhfg", age: 22 },
//   { name: "aadf", age: 35 },
// ];
// console.log(arr.sort((a, b) => a.age - b.age)); //age ascending
// console.log(arr.sort((a, b) => b.age - a.age)); //age descending
// console.log(arr.sort((a, b) => (a.name > b.name ? 1 : -1))); //name ascending
// console.log(arr.sort((a, b) => (a.name > b.name ? -1 : 1))); //name descending

//Array Sorting: Write a function that takes an array of objects, where each object has a "name" property (a string) and an "age" property (a number), and returns a new array of objects sorted by age in ascending order.

// let ipArr = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
// ];

// let opArr = ipArr.sort((a, b) => a.age > b.age);
// console.log(opArr);

//Array Flattening:
//Write a function that takes an array of nested arrays and flattens it into a single array with no nested arrays.

// let arr= [1, [2, [3, 4], 5], 6, [7, 8,[9,10,[11,12]]]]
//method 1
// const arrFlat = arr.flat(3)
// console.log(arrFlat)

//method 2
// let arr = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10, [11, 12]]]];
// const flat = (arr) => {
//   let flatArr = [];
//   for (let val of arr) {
//     if (Array.isArray(val)) {
//       let x = flat(val);
//       flatArr = [...flatArr, ...x];
//     } else {
//       flatArr.push(val);
//     }
//   }
//   return flatArr;
// };
// console.log(flat(arr));

// is Array method
// let arr= [1, [2, [3, 4], 5], 6, [7, 8,[9,10,[11,12]]]]
// let str= 'devaviswa'
// console.log(Array.isArray(str))
// console.log(Array.isArray(arr))

//PROBLEM SOLVING

//REVERSAL STRING

//method 1
// function reverseString(str) {
//   let rev= str.split('').reverse().join('')
//   console.log(rev)
// }
// reverseString("devaviswa ganesan")

//method 2
// function reverseString(str) {
//   let rev=""
//   for(let i=str.length-1;i>0;i--) {
//     rev += str[i]
//   }
//   console.log(rev)
// }
// reverseString("devaviswa ganesan")

// method 3
// function reverseString(str) {
//   let rev= str.split(' ').map((v)=>{
//     return v.split('').reverse().join('')
//   }).join(' ')
//   console.log(rev)
// }
// reverseString("devaviswa ganesan")

//FIRST LETTER CAPS

// function caps(str) {
//   let arr= str.split(' ')
//   for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i].split('')[0].toUpperCase() + arr[i].slice(1)
//   }
//   console.log(arr.join(' '))
// }
// caps("deva viswa ganesan")

// FACTORIAL

// let fact=1
// function factorial(num) {
//   for(let i =1;i<=num;i++){
//     fact*=i
//   }
//   console.log(fact)
// }
// factorial(10)

//PALINDROME

// function palindrome(str) {
//   let reverse = str.split("").reverse().join("");
//   if (str === reverse) {
//     console.log(`the word ${str} is Palindrome`);
//   } else {
//     console.log(`the word ${str} is Not Palindrome`);
//   }
// }
// palindrome("deva");

// function palindrome(str) {
//     return str===str.split('').reverse().join('')
// }
// console.log(palindrome('racecar'))

//VOWEL

// method 1
// function numberOfVowel(str) {
//   const count = str.match(/[aeiouAEIOU]/g).length;
//   console.log(count);
// }
// numberOfVowel("ant Aunt");

//method 2
// let str= 'devaviswa'
// for (k of str) {
//   console.log(k)
// }

// function numberOfVowel(str){
//   let vowel= "AEIOUaeiou"
//   let count=0
//   for(let i of str){
//     if(vowel.includes(i)){
//       count ++
//     }
//   }
//   console.log(count)
// }
// numberOfVowel('ABCDE abced')

//SUM OF NUMBERS

// function sum(n) {
//     let arr = n.toString().split("");
//     let sum = 0;
//     // console.log(arr)
//     for (let n of arr) {
//       sum += parseInt(n);
//     }
//     console.log(sum)
//   }
//   sum(12345);

//REDUCE
// let arr = [10,2,3,4,5,6,7,8,9]
// let max=arr.reduce((p,c)=>{
//   return Math.max(p,c)
// })
// console.log(max)
// let min=arr.reduce((p,c)=>{
//   return Math.min(p,c)
// })
// console.log(min)

//sum of nos
// function sum(num) {
//   let arr = num.toString().split("");
//   let sum = arr.reduce((p, c) => {
//     return parseInt(p) + parseInt(c);
//   });
//   console.log(sum);
// }
// sum(12345);

// function sum(num) {
//   let arr = num.toString().split("");
//   let sum = arr.reduce((p, c) => {
//     return p + parseInt(c);
//   },0);
//   console.log(sum);
// }
// sum(12345);

//AMSTRONG
//153
// 1^3 + 5^3 + 3^3 = 153

// function isAms(num){
//     const numStr= num.toString()
//     const power= numStr.length
//     let sum=0
//     for(digit of numStr){
//         sum+= Math.pow(parseInt(digit),power)
//     }
//     console.log(sum===num)
// }
// isAms(9474)

//FIBONACCI
// function fibonacci(n) {
//     if(n<=1){
//         return n
//     } else {
//         return (fibonacci(n-1)+fibonacci(n-2))
//     }
// }
// console.log(fibonacci(2))

// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));

// function fibonacci(num) {
// 	let num1 = 0;
// 	let num2 = 1;
// 	let sum;
// 	let i = 0;
// 	for (i = 0; i < num; i++) {
// 		sum = num1 + num2;
// 		num1 = num2;
// 		num2 = sum;
// 	}
// 	return num2;
// }
// console.log(fibonacci(10));
// console.log( fibonacci(8));

//LONGEST WORD IN A SENTANCE

// function longestWord(sentance) {
//   let oneWord = sentance.split(" ");
//   // console.log(oneWord)
//   let longest = "";
//   for (let i = 0; i < oneWord.length; i++) {
//     // console.log(oneWord[i])
//     if (oneWord[i].length > longest.length) {
//       longest = oneWord[i];
//     }
//   }
//   console.log(longest);
// }
// longestWord("cow boy beepo knocking on the heavens door");

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

//VAR LET CONST
// var a=12
// a=13 //reassign
// console.log(a)
// var a=14 //redeaclare
// console.log(a)

// let b=10
// b=20 //reassign
// console.log(b)
// let b=30 //no redeclareation

// const c= 10
// c=20 //no reassigment
// console.log(c)
// const c= 20 //no redeclaration

// var a;
// a=30
// console.log(a);

// let a;
// a=30
// console.log(a);

// const a; // Missing initializer in const declaration
// a= 40
// console.log(a);

// let a= 10
// let b= "a"
// console.log(b)

// let n= 0
// if(n>0){
//     console.log(`the number ${n} is +ve`);
// } else if (n<0){
//     console.log(`the number ${n} is -ve`);
// } else {
//     console.log(`the number is Zero`);
// }

// let n = 0;
// switch (n > 0) {
//   case true: {
//     console.log("the number is +Ve");
//     break;
//   }
//   case false: {
//     switch (n < 0) {
//       case true: {
//         console.log("the number is -Ve");
//         break;
//       }
//       case false: {
//         console.log("the number is 0");
//         break;
//       }
//     }
//     break;
//   }
// }

// let n = 0;
// n > 0 ? console.log("+ve") : n < 0 ? console.log("-ve") : console.log("zero");

// for (let i=0;i<4;i++){
//     console.log(i)
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// let arr = [1, 4, 8, 3, 8];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// let arr = [1, 4, 8, 3, 8];
// let i = 0;
// do {
//   console.log(arr[i]);
//   i++;
// } while (i < arr.length);

// let name = function () {
//     console.log('deva')
// }
// name()

// function name () {
//     console.log("deva")
// }
// name()

// function sqRoot(n) {
//   console.log(n * n);
// }
// sqRoot(9);

//callback funciton
// function addTwo(n) {
//   return n + 2;
// }
// function mul5(n) {
//   return n * 5;
// }
// function operation(n, func) {
//   n = func(n);
//   n = mul5(n);
//   console.log(n);
// }
// operation(5, addTwo);

//callback funciton
// function greet(name, callBackFunc) {
//   console.log(name);
//   callBackFunc();
// }
// function callBack() {
//   console.log("i am call back fn");
// }
// greet("deva", callBack);

//callback funciton

// function greet(){
//     console.log('hello deva')
// }
// setTimeout(greet,3000)

//FIRST CLASS FN and HIGHER ORDER FUNCTION

//firstcalss
// function rollNumber() {
//   return "roll number is 24";
// }
// //higherorder
// function name(name, rollNumber) {
//   console.log("my name is ", name, "my", rollNumber);
// }
// name("deva", rollNumber());

// function declaration
// function myName() {
//   console.log("deva");
// }
// myName()

//function expresseion
// let myName = function () {
//   console.log("deva");
// };
// myName();

//BLOCK SCOPE
// if (true) {
//     var a = "deva";
//   }
//   console.log(a);

// if (true) {
//   let a = "deva";
// }
// console.log(a);

// if (true) {
//     const a = "deva";
//   }
//   console.log(a);

//SPREAD
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [9, 10];
// const arr = [arr1, arr2];
// console.log(arr);
// const arrSpread = [...arr1, ...arr2];
// console.log(arrSpread);

//REST
// function add(...numbers) {
//   let sum=0
//   for (let val of numbers) {
//     sum += val;
//   }
//   console.log(sum);
// }
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function add(...nos) {
//   let sum = 0;
//   for (let n of nos) {
//     sum += +n;
//   }
//   console.log(sum/2);
// }
// add(1, 2, 3, 4, 5,20);

// function combineStrings(...strings){
//     console.log(strings.join(' '))
// }
// combineStrings('deva','viswa','g')

//DESTRUCTURING Array and Object
//ARRAY
// let arr = ["virtus", "compass", "cybertruck"];
// const [sedan, suv, electric] = arr;
// console.log(sedan, electric, suv);

// let name = ["deva", "araving", "booma", "ganesan"];
// const [, bro, , dad] = name;
// console.log(bro, dad);

// //REST AND SPREAD IN DESTRUCTURING
// let students = [
//   "deva",
//   "araving",
//   "booma",
//   "ganesan",
//   "hsahsa",
//   "tyuohdc",
//   "dfruigj",
//   "r7opjhv",
// ];
// const [one, two, three, ...stu] = students;
// console.log(one, three, two);
// console.log(stu);
// console.log(...stu);

// //nested destructuring
// var name1 = ["deva", "araving", ["booma", "ganesan"]];
// const [, , [mommy, daddy]] = name1;
// console.log(mommy, daddy);

//OBJECT
// let family = {
//   dad: "ganesan",
//   mom: "booma",
//   borther: "araving",
//   me: "deva",
// };
// console.log(family.dad);
// const { dad, mom, brother, me } = family;
// console.log(dad);

//changing name
// const {dad:appa} = family
// console.log(appa)

// nested ------------------------------------------x
// const house= {
//     area :'Vayalur',
//     house: {
//         street:'shanmuga nagar',
//         pincode: '620102'
//     },
//     door : '4C'
// }

// const {area,house:{street,pincode},door}= house
// console.log(street,pincode)

//Looping and iteration

// let family = {
//   dad: "ganesan",
//   mom: "booma",
//   borther: "araving",
//   me: "deva",
// };
// let name = ["deva", "araving", "booma", "ganesan"];
// const keys = Object.keys(family);
// console.log(keys);
// const values = Object.values(family);
// console.log(values);
// const entries = Object.entries(family);
// console.log(entries);

//FOR EACH
// let family = {
//     dad: "ganesan",
//     mom: "booma",
//     borther: "araving",
//     me: "deva",
//   };
//   let names = ["deva", "araving", "booma", "ganesan"];
// keys.forEach((v, i, a) => {
//   console.log("key", v);
//   console.log("value", family[v]);
// });

// values.forEach((v, i, a) => {
//   console.log(v);
// });

// names.forEach((v,i,a)=>{
//     console.log('value:', v)
//     console.log('index:', i)
// })

//FOR IN
// let family = {
//   dad: "ganesan",
//   mom: "booma",
//   borther: "araving",
//   me: "deva",
// };
// let names = ["deva", "araving", "booma", "ganesan"];

// for (k in family) {
//   console.log("keys", k);
//   console.log("values", family[k]);
// }

// for (index in names) {
//   console.log(index);
// }

//FOR OF
// let family = {
//   dad: "ganesan",
//   mom: "booma",
//   borther: "araving",
//   me: "deva",
// };
// let names = ["deva", "araving", "booma", "ganesan"];
// let str = "devaviswa";
// for (let k of family) {
//   console.log(k);
// }

// for (let k of names) {
//   console.log(k);
// }

// for (let k of str) {
//   console.log(k);
// }

//OOPS
// its a programming style , which uses objects and classes . OOP is used for making code more flexible and easy to maintain

//FACTORY Function

// function factory(name, weight, seat) {
//   return {
//     name,
//     weight,
//     seat
//   };
// }
// let car1 = factory("virtus", "1 tonne", "4seat");
// console.log(car1);

//Constructor function
// function carManuf(name, weight, seat) {
//   this.name = name;
//   this.weight = weight;
//   this.seat = seat;
// }
// const car1 = new carManuf("thar", "2ton", "4seats");
// console.log(car1);

//class
// class carProduction{
//   constructor(name,color,seat){
//     this.name= name
//     this.color
//   }
// }

//  MRF
// const array = [1, 3, 5, 2, 4, 9, 6, 7];

// const mapArr = array.map((v, i, a) => {
//   return v * 10;
// });
// console.log(mapArr);

// const filterArr = array.filter((v, i, a) => {
//   return v % 2 == 0;
// });
// console.log(filterArr);

// const reduceArr= array.reduce((acc,v,i,a)=> {
//   return acc + v
// })
// console.log(reduceArr)

// function add(n){
//   const arr= n.toString().split('')
//   const sum=arr.reduce((a,v)=>{
//     return a+ parseInt(v)
//   },0)
//   console.log(sum)
// }
// add(198)

// HTML

// DOM

// let red= document.getElementsByClassName('red')
// console.log(red)
// console.log(red[0])
// red[0].textContent= `deva`
// let yellow= document.getElementById('yellow')
// console.log(yellow)
// yellow.innerText='deva'

// let red = document.querySelector('.red')
// console.log(red)
// red.innerHTML= `<h1>deva</h1>`

// let red = document.querySelectorAll('.red')
// console.log(red)
// console.log(red[0])
// red.innerHTML= `<h1>deva</h1>`

