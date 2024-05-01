//PLACEMENT MOCK FAIL
//Input = [3, 4, 3, 5, 3, 6];
// Expected Output : [3:3,4:1,5:1,6:1]
//My CODE
// let emptyArr = [];
// let input = [3, 4, 3, 5, 3, 6];
// let arr = input.forEach((v) => {
//   for (let i = 0; i < input.length; i++) {
//     console.log(i);
//   }
// });

//PREP
// let numberOfOccurrence = (array) => {
//   let count = array.reduce((acc, val, ind, arr) => {
//     if (acc[val]) {
//       acc[val] += 1;
//     } else {
//       acc[val] = 1;
//     }
//     return acc;
//   }, {});
//   console.log(count);
// };
// numberOfOccurrence([3, 4, 3, 5, 3, 6]);

// let arr = ["geeks",2,"geeks",2,"Javascript",4,"Javascript",5,"for",6,"Javascript",1,"for",5,7,8,"for",2];
// const counter = {};
// arr.forEach((ele) => {
//   if (counter[ele]) {
//     counter[ele] += 1;
//   } else {
//     counter[ele] = 1;
//   }
// });
// console.log(counter);

// let op = arr.reduce((acc,val)=>{
//     if(acc[val]){
//         acc[val] +=1 
//     }else {
//         acc[val]=1
//     }
//     return acc
// },{})
// console.log(op)

// let occurresnces = (array) => {
//   let count = array.reduce((acc, val, ind, arr) => {
//     if (acc[val]) {
//       acc[val] += 1;
//     } else {
//       acc[val] = 1;
//     }
//     return acc;
//   }, {});
//   console.log(count);
// };
// occurresnces(["jack", "And", "jack", "jill", "jack", "jill"]);

// const capital = (obj) => {
//   let cap = obj.reduce((acc, val, ind, arr) => {
//     // console.log(acc)
//     // console.log(val)
//     for (let key in val) {
//       // console.log(key)
//       let value = val[key];
//       key = key.toUpperCase();
//       acc[key] = value;
//     }
//     return acc;
//   }, {});
//   console.log(cap);
// };
// capital([{ jack: "Three", jill: "Two", And: "one" }]);

// const cap = (obj) =>{
//     let cap= obj.reduce((acc,val)=>{
//         for (let key in val) {
//             acc[key.toUpperCase()]= val[key]
//         }
//         return acc
//     },{})
//     console.log(cap)
// }
// cap([{ jack: "Three", jill: "Two", And: "one" }])

// const capital = (obj) =>{
//  let reduced = obj.reduce((acc, val, ind, arr)=>{
//   for(let key in val){
//       acc[key.toUpperCase()] = val[key]
//   }
//   return acc
//  },{})
//  console.log(reduced)
// }
// capital([{ jack: "Three", jill: "Two", And: "one" }])

// const mergesortedarrays = (arr1, arr2) => {
//   const array1sorted = arr1.sort((a, b) => a - b);
//   const array2sorted = arr2.sort((a, b) => a - b);

//   const merged = array1sorted.concat(array2sorted);
//   console.log(...new Set(merged));
// };
// mergesortedarrays(
//   [2, 3, 45, 1, 23, 56, 3, 2, 1, 4],
//   [12, 3, 45, 2, 1, 23, 56, 78, 90]
// );



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

// const points = [40, 100, 1, 5, 25, 10, 40, 100];
// console.log(
//   points.sort((a, b) => {
//     // console.log('a',a)
//     // console.log('b',b)
//     // console.log(b-a)
//     return b - a;
//   })
// );

// const commonElements = (arr1, arr2) => {
//   let array1 = arr1.sort((a, b) => a - b);
//   let array2 = arr2.sort((a, b) => a - b);
//   let array = [];
//   for (let val of array1) {
//     if (array2.includes(val)) {
//       array.push(val);
//     }
//   }
//   console.log(...new Set(array));
// };
// commonElements([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4]);

// function commonElemArr(a1,a2){
//     let commonArr=[]
//     for(let val of a1){
//         if(a2.includes(val)){
//             commonArr.push(val)
//         }
//     }
//     console.log(...new Set(commonArr))
// }
// commonElemArr([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4])

// const commonElementsed = (arr1, arr2) => {
//   let array1 = arr1.sort((a, b) => a - b);
//   let array2 = arr2.sort((a, b) => a - b);
//   const filtered = array1.filter((val) => {
//     if (array2.includes(val)) {
//       return val;
//     }
//   });
//   console.log(...new Set(filtered));
// };
// commonElementsed([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4]);

// const merge = (arr1, arr2) => {
//   const merged = arr1.concat(arr2);
//   console.log(...new Set(merged));
// };
// merge([1, 2, 3, 4, 1, 2, 3, 4], [5, 6, 7, 8]);

// const common = (arr1, arr2) => {
//   const commonvalues = arr1.filter((val) => {
//     return arr2.includes(val);
//   });
//   console.log(commonvalues);
// };
// common([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]);

// let unrepeated = (word) => {
//   let letters = word.toLowerCase().split("");
//   console.log(...new Set(letters));
// };
// unrepeated("devaviswa");

// function unRepLetter(str){
//     let unrep=[]
//     let arr= str.split("")
//     for (let val of arr){
//         if(!unrep.includes(val)){
//             unrep.push(val)
//         }
//     }
//     console.log(unrep.join(' '))
// }
// unRepLetter('devaviswa')

// function unRep(str){
//     let arr= str.split('')
//     console.log(...new Set(arr))
// }
// unRep('devavsiwa')


// let remDup = (arr) => {
//   let array = [];
//   for (let num of arr) {
//     if (!array.includes(num)) {
//       array.push(num);
//     }
//   }
//   console.log(array);
// };
// remDup([1, 2, 3, 4, 4, 5, 6, 6]);

// function removeDup(arr){
//     let orgArr=[]
//     for(let val of arr){
//         if(!orgArr.includes(val)){
//             orgArr.push(val)
//         }
//     }
//     console.log(orgArr)
// }
// removeDup([1, 2, 3, 4, 4, 5, 6, 6])

// let remDup = (arr) => {
//   return [...new Set(arr)]
// }
// console.log(remDup([1, 2, 3, 4, 4, 5, 6, 6]))

// let areAnagram = (word1, word2) => {
//   let sorted1 = word1.split("").sort().join("");
//   // console.log(sorted1)
//   let sorted2 = word2.split("").sort().join("");
//   // console.log(sorted2)
//   if (sorted1 === sorted2) {
//     return true;
//   }
// };
// console.log(areAnagram("listen", "silent"));

// function anagramam(s1,s2){
//     let sort1= s1.split('').sort().join('')
//     let sort2= s2.split('').sort().join('')
//     console.log(sort1===sort2)
// }
// anagramam("listen", "silent")

// let largestnum = (arr) => {
//   return Math.max(...arr);
// };
// console.log(largestnum([1, 2, 3, 4, 5, 9, 4, 5]));

// function largest(arr){
//     console.log(Math.max(...arr))
// }
// largest([1, 2, 3, 4, 5, 9, 4, 5])

// const stringWithSpaces = "  Hello    world  ";
// const stringWithoutSpaces = stringWithSpaces.split(" ").join("");
// console.log(stringWithoutSpaces); // Output: "Helloworld"

// function strNoSpace(str){
//     let org= str.split(' ').join('')
//     console.log(org)
// }
// strNoSpace("  Hello    world  ")

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.floor(Math.random() * 10);

//     if (number < 5) {
//       resolve(`Success and it is ${number}`);
//     } else {
//       reject(`Error and it is ${number}`);
//     }
//   });
// });

// myPromise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));


// let n=5
// let space=""
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         space+= j
//     }
//     space += '\n'
// }
// console.log(space)

// let row =5
// let p=""
// for(let n=1;n<=row;n++){
//     for(let num=1;num<=n;num++){
//         p += "*"
//     }
//     p += '\n'
// }
// console.log(p)

// let n=5
// let string=""
// for(let i=0;i<=n;i++){
//     for(let j=0;j<n-i;j++){
//         string += " "
//     }
//     for(let k=0;k<i;k++){
//         string += "*"
//     }
//     string += '\n'
// }
// console.log(string)

// let rows=5
// pattern=""
// for(let n=1;n<=rows;n++){
//     for(let num=1;num<=(rows+1)-n;num++){
//         pattern +=num
//     }
//     pattern += '\n'
// }
// console.log(pattern)

// let r=5
// let line=''
// for(let i=0;i<r;i++){    
//     for(let j=r;j>i;j--){
//         line+= j
//     }
//     line+='\n'    
// }
// console.log(line)

// function sum(n){
//     let arr= n.toString().split('')
//     let sumofNos=arr.reduce((acc,val)=>{
//         return acc + +val
//     },0)
//     console.log(sumofNos)
// }  
// sum(156)

//Workout from 10,25 JS Interview Question--------------------------------------------------------------

// function rev(str){
//   const arr= str.split(' ')
//   // console.log(arr)
//   const revStr=arr.map((v)=>{
//     return v.split('').reverse().join('')
//   })
//   console.log(revStr.join(' '))
// }
// rev('deva viswa ganesan')

// function rev2(str) {
//   let rev=[];
//   let arr = str.split(" ");
//   for (let val of arr) {
//     rev.push(val.split("").reverse().join(""))
//   }
//   console.log(rev.join(' '))
// }
// rev2("deva viswa ganesan");

// function rev3(str){
//   let rev=''
//   let arr= str.split('')
//   // console.log(arr)
//   for(let i=arr.length-1;i>=0;i--){
//     // console.log(arr[i])
//     rev += arr[i]
//   }
//   console.log(rev)
// }
// rev3('deva viswa ganesan')

// function longestWord(sent){
//   let arr = sent.split(' ')
//   let longest =''
//   // console.log(arr)
//   for(let i=0;i<arr.length;i++){
//     if(arr[i].length>longest.length){
//       longest= arr[i]
//     }
//   }
//   console.log(longest)
// }
// longestWord('cow boy beepo knocking on the heavens door')

// function palindrome(str){
//   let rev = str.split('').reverse().join('')
//   if(rev.toLowerCase()===str.toLowerCase()){
//     console.log('is palindrome')
//   } else {
//     console.log('not palindrome');
//   }
// }
// palindrome('racecaR')

// function removeDuplicate(arr){
//   let orgArr=[]
//   for(let val of arr){
//     // console.log(val)
//     if(!orgArr.includes(val)){
//       orgArr.push(val)
//     }
//   }
//   console.log(orgArr)
// }
// removeDuplicate([1,2,3,3,2,1,4,5,6,7,8,9,5,6])

//The Set object lets you store unique values of any type, whether primitive values or object references.
//The Set() constructor creates Set objects.
// function remDup(arr){
//   return [...new Set(arr)]
// }
// console.log(remDup([1,2,3,3,2,1,4,5,6,7,8,9,5,6]))

// function remDupStr(str){
// 	let arr= str.split('')
// 	console.log(... new Set(arr))
// }
// remDupStr('devavsiwa')

// let set1 = new Set(["sumit","sumit","amit","anil","anish"]);
// console.log(set1)

// let unrepeated = (word) => {
//   let letters = word.toLowerCase().split("");
//   console.log(...new Set(letters));
// };
// unrepeated("devaviswa");

// function anagrams(str1, str2) {
//   let sortStr1 = str1.toLowerCase().split("").sort().join('')
//   console.log(sortStr1)
//   let sortStr2 = str2.toLowerCase().split("").sort().join('')
//   console.log(sortStr2)
//   if (sortStr1 === sortStr2) {
//     console.log("its anagram");
//   } else {
//     console.log("not anagram");
//   }
// }
// anagrams("deVa", "Edva");

// function vowels(str){
//   let arr= str.split('')
//   let vowels ='aeiouAEIOU'
//   let count=0
//   for(let val of arr){
//     if(vowels.includes(val)){
//       count++
//     }
//   }
//   console.log(count)
// }
// vowels('AEIOUaeiouq')

// function vow(str){
//   let count=str.match(/[aeiou]/gi).length
//   console.log(count)
// }
// vow('devA')

// function largest(val) {
//   console.log(Math.max(...val));
// }
// largest([9, 8, 6, 4, 1]);

// function larg(arr) {
//   let largest=arr[0]
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//      largest=arr[i]
//     }
//   }
//   console.log(largest)
// }
// larg([0, 8, 6, 4, 1,10,99999]);

// function prime(n){
//   for (let i=2;i<=n/2;i++){
//     if(n%i===0){
//       return ('not a prime')
//     } else {
//       return('prime')
//     }
//   }
// }
// console.log(prime(29))

// let prime = (num) =>{
//   for(let i=2; i<num/2; i++){
//       if(num%i === 0) {
//           return "Not Prime"
//       }
//   }
//   return "Prime"
// }
// console.log(prime(29))

// function factorial(n){
//   let fact=1
//   for(let i=1;i<=n;i++){
//     fact*=i
//   }
//   console.log(fact)
// }
// factorial(10)

// function joinString(str){
//   let joinedStr= str.split(' ').join('')
//   console.log(joinedStr)
// }
// joinString('       deva     ,        viswa           , lllll       --')

//Input = [3, 4, 3, 5, 3, 6];
// Expected Output : [3:3,4:1,5:1,6:1]

// let inp = [3, 4, 3, 5, 3, 6];
// let ans= inp.reduce((acc,val)=>{
// 	if(acc[val]){
// 		acc[val] += 1
// 	} else {
// 		acc[val] =1
// 	}
// 	return acc
// },{})
// console.log(ans)

// let inp = [3, 4, 3, 5, 3, 6];
// let emp={}
// inp.forEach((v)=>{
// 	if(emp[v]){
// 		emp[v] += 1
// 	} else {
// 		emp[v] =1
// 	}
// })
// console.log(emp)

// let emptyObj = {};
// inp.forEach((v) => {
//   if (emptyObj[v]) {
//     emptyObj[v] += 1;
//   } else {
//     emptyObj[v] = 1;
//   }
// });
// console.log(emptyObj);

// let ans= inp.reduce((a,v)=>{
// 	if(a[v]){
// 		a[v] += 1
// 	}
// 	else {
// 		a[v] =1
// 	}
// 	return a
// },{})
// console.log(ans)

// let inp = [3, 4, 3, 5, 3, 6];
// let count = {};
// for (let v of inp) {

//   //   if (count[v]) count[v] += 1;
//   //   else count[v] = 1;

//   count[v] = count[v] ? count[v] + 1 : 1;
// }
// console.log(count);

// let inp = [3, 4, 3, 5, 3, 6, "deva", "viswa", "deva", "ganesan", -1, 5, -1];
// let op = inp.reduce((acc, val) => {
//   if (acc[val]) {
//     acc[val] += 1;
//   } else {
//     acc[val] = 1;
//   }
//   return acc;
// }, {});
// console.log(op);

// let arr=['A23','B56','B56','C79','D16']
// let unique=[]
// for(let k of arr){
// 	if(!unique.includes(k)){
// 		unique.push(k)
// 	}
// }
// console.log(...unique)

// const capital = (obj) => {
//   let cap = obj.reduce((acc, val, ind, arr) => {
//     // console.log(acc)
//     // console.log(val)
//     for (let key in val) {
// 		// console.log(val)
//     //   console.log(key)
//       // let value = val[key];
//       // key = key.toUpperCase();
//       // acc[key] = value;
// 	//   console.log(val[key]);
//       acc[key.toUpperCase()] = val[key];
//     }
//     return acc;
//   }, {});
//   console.log(cap);
// };
// capital([{ jack: "Three", jill: "Two", And: "one" }]);

// let numberOfOccurrences = (arr) => {
//   let reduced = arr.reduce((acc, val) => {
//     if (acc[val]) {
//       acc[val]++;
//     } else {
//       acc[val] = 1;
//     }
//     return acc;
//   }, {});

//   let output = "[";
//   for (let key in reduced) {
//     output += key + ": " + reduced[key] + ", ";
//   }
//   output = output.slice(0, -2);
//   output += "]";

//   console.log(output);
// };
// numberOfOccurrences([3, 4, 3, 5, 3, 6]);

// const mergesortedarrays = (arr1, arr2) => {
//   const array1sorted = arr1.sort((a, b) => a - b);
//   const array2sorted = arr2.sort((a, b) => a - b);

//   const merged = array1sorted.concat(array2sorted);
// //   console.log(merged)
//   console.log([...new Set(merged)]);
// };
// mergesortedarrays(
//   [2, 3, 45, 1, 23, 56, 3, 2, 1, 4],
//   [12, 3, 45, 2, 1, 23, 56, 78, 90]
// );

// function mergeArr(arr1, arr2) {
//   let sortArr1 = arr1.sort((a, b) => a - b);
// //   console.log(sortArr1);
//   let sorArr2 = arr2.sort((a, b) => a - b);
// //   console.log(sorArr2);
//   let sortArr = sortArr1.concat(sorArr2);
//   let arr= sortArr.sort((a,b)=> a-b)
// //   console.log(sortArr);
//   console.log([...new Set(arr)])
// }
// mergeArr([2, 3, 45, 1, 23, 56, 3, 2, 1, 4], [12, 3, 45, 2, 1, 23, 56, 78, 90]);

// const commonElements = (arr1, arr2) => {
//   let array1 = arr1.sort((a, b) => a - b);
//   let array2 = arr2.sort((a, b) => a - b);
//   let array = [];
//   for (let val of array1) {
//     if (array2.includes(val)) {
//       array.push(val);
//     }
//   }
//   console.log(...new Set(array));
// };
// commonElements([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4]);

// function commonElem(a1,a2){
// 	let cArr=[]
// 	for (k of a1){
// 		if(a2.includes(k)){
// 			cArr.push(k)
// 		}
// 	}
// 	console.log(...new Set(cArr))
// }
// commonElem([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4]);

// const commonElementsed = (arr1, arr2) => {
//   let array1 = arr1.sort((a, b) => a - b);
//   let array2 = arr2.sort((a, b) => a - b);
//   const filtered = array1.filter((val) => {
//     if (array2.includes(val)) {
//       return val;
//     }
//   });
//   console.log(...new Set(filtered));
// };
// commonElementsed([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4]);

// const merge = (arr1, arr2) => {
//   const merged = arr1.concat(arr2);
//   console.log(...new Set(merged));
// };
// merge([1, 2, 3, 4, 1, 2, 3, 4], [5, 6, 7, 8]);

// const common = (arr1, arr2) => {
//   const commonvalues = arr1.filter((val) => {
//     return arr2.includes(val);
//   });
//   console.log(commonvalues);
// };
// common([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]);

// function commonElem(a1,a2){
// 	let cArr=[]
// 	for (k of a1){
// 		if(a2.includes(k)){
// 			cArr.push(k)
// 		}
// 	}
// 	console.log(...new Set(cArr))
// }
// commonElem([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]);

// function twoSum(num,target) {
// 	for(let i=0;i<num.length;i++){
// 		for(let j=i+1;j<num.length;j++){
// 			if(num[i]+num[j]===target){
// 				return [i,j]
// 			}
// 		}
// 	}
// }
// console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50))

// let data;
// function fetching() {
//   // console.log(data)
//   const mainDiv = document.getElementById("root");
//   const table = document.createElement("table");
//   table.style.border = "2px solid blue";
//   mainDiv.append(table);
//   const key = Object.keys(data[0]);
//   console.log(key);
//   const tHead = `<tr>${key
//     .map((v) => {
//       return `<td>${v}</td>`;
//     })
//     .join("")}</tr>`;
//   const tBody = data.map((v) => {
//     return `<tr>${key
//       .map((x) => {
//         return `<td>${v[x]}</td>`;
//       })
//       .join("")}</tr>`;
//   });
//   console.log(tBody);
//   table.innerHTML = tHead + tBody;
// }

// fetch(
//   "https://cors-anywhere.herokuapp.com/gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"
// )
//   .then((res) => res.json())
//   .then((res) => {
//     data = res;
//     fetching();
//   });

//Promise

// let prom = new Promise((res, rej) => {
//   let r = 1;
//   if (r > 5) {
//     res(r);
//   } else {
//     rej(r);
//   }
// });
// prom
//   .then((val) => {
//     console.log(val, "is Gt 5");
//   })
//   .catch((e) => {
//     console.log(e, "not gt 5");
//   });

// function duplicateArr(a1){
//     console.log(a1.length)
//     let arr=[]
//     for(let val of a1){
//         if(!arr.includes(val)){
//             arr.push(val)
//         }
//     }
//     console.log(arr)
//     console.log(arr.length)
// }
// duplicateArr([1,2,3,1,2,3,4,5,6,7,8,9,9,8,7,56,0])

// function duplicateArrs(a1,a2){
//     let arr= a1.concat(a2)
//     // console.log(arr)
//     let newArr= [...new Set(arr)]
//     console.log(newArr)
// }
// duplicateArrs([1,2,3] , [3,4,5])

// function commonElem(a1, a2) {
//   const arr = [];
//   for (let val of a1) {
//     if (a2.includes(val)) {
//       arr.push(val);
//     }
//   }
//   console.log(...new Set(arr));
// }
// commonElem([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4]);

// function greatestInAnArray(a){
//     let greatest= a[2]
//     for(let val of a){
//         if(val>greatest){
//             greatest=val
//         }
//     }
//     console.log(greatest)
// }
// greatestInAnArray([1,2,43,56,324,78,89])

// function prime(n){
//     for(let i=2;i<n/2;i++){
//         if(n%i===0){
//             return('not  prime');
//         } else {
//             return('prime')
//         }
//     }
// }
// console.log(prime(10))

// const objKeyCaps = (obj) => {
//   let capi = obj.reduce((acc, val) => {
//     for (let key in val) {
//       acc[key.toUpperCase()] = val[key];
//     }
//     return acc;
//   }, {});
//   console.log(capi);
// };
// objKeyCaps([
//   {
//     myShades: "dior",
//     myPants: "valor",
//     create: " explore",
//     Expand: "conqure",
//   },
// ]);

// let data = [
//   {
//     myShades: "dior",
//     myPants: "valor",
//     create: " explore",
//     Expand: "conqure",
//   },
//   {
//     myShades: "da",
//     myPants: "df",
//     create: " sd",
//     Expand: "ty",
//   },
//   {
//     myShades: "45",
//     myPants: "rtyh",
//     create: " 34",
//     Expand: "d",
//   },
// ];
// let op= data.map((val)=> val.myShades.toUpperCase())
// console.log(op)

// const input = [3, 4, 3, 5, 3, 6]
// // Expected Output : [3:3,4:1,5:1,6:1]
// let obj={}
// input.forEach((v)=>{
//     if (obj[v]){
//         obj[v] +=1
//     } else {
//         obj[v]=1
//     }
// })
// console.log(obj)

// let op= input.reduce((acc,val)=>{
//     if(acc[val]){
//         acc[val] += 1
//     } else {
//         acc[val] =1
//     }
//     return acc
// },{})
// console.log(op)




// console.log('hello')

// Eg: data = [4, 6, 2, 8, 9, 2, 6, 7, 6],
// output = { 6: 3,2: 2}

let input= [4, 6, 2, 8, 9, 2, 6, 7, 6]
let output= input.reduce((acc,val)=>{
    if(acc[val]) {
        acc[val] +=1
    } else {
        acc[val] =1
    }
    return acc
},{})
console.log(output)