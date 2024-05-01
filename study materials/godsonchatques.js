let fib = (num) =>{
    let num1 = 0
    let num2 = 1
    let nextTerm
    for(let i=0; i<num; i++){
        console.log(num1)
        nextTerm = num1 + num2
        num1 = num2
        num2 = nextTerm
    }
}
fib(6)

let fact = (num) =>{
    let fact = 1
    for(let i = 1; i<=num; i++){
        fact = fact*i
       
    }
    return fact

}   
console.log(fact(6))

let reverseString = (str) =>{
    let rev = str.split("").reverse().join("")
    console.log(rev)
}
reverseString("Benja")

let palindrome = (str) =>{
    let rev = str.split("").reverse().join("")
    if(rev === str){
        console.log("Palindrome")
    }
    else{
        console.log("No Palindrome")
    }
}
palindrome("racecar")
palindrome(("Emmanuel"))


let sum = (arr) =>{
 let sumofarr = arr.reduce((acc, val, ind, arr) =>{
    return acc +val
 },0)
 console.log(sumofarr)
}
sum([1,2,100])

let prime = (num) =>{
    for(let i=2; i<num/2; i++){
        if(num%i === 0) {
            return "Not Prime"
        }
    }
    return "Prime"
}
console.log(prime(7))


let longest = (str) =>{
    let longestWord = ""
    let strsplit = str.split(" ")
    for(let word of strsplit){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}
console.log(longest("I am Emmanuel a fullstack developer"))


let vowels = (str) =>{
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelcount = 0
    let splitstr = str.split("")
    for(let letter of splitstr){
        if(vowels.includes(letter.toLowerCase())){
            vowelcount++
        }
    }
    return vowelcount
}
console.log(vowels("EMmanuel"))


const mergesortedarrays = (arr1, arr2) =>{
    const array1sorted = arr1.sort((a,b)=> a-b)
    const array2sorted = arr2.sort((a,b)=> a-b)

    const merged = array1sorted.concat(array2sorted)
    console.log(...new Set(merged))
}
mergesortedarrays([2,3,45,1,23,56,3,2,1,4],[12,3,45,2,1,23,56,78,90])


const titleCase = (str) =>{
    let strsplit = str.split(" ")
    let uppercase = strsplit.map((val, ind) =>{
        let title = val.slice(0,1).toUpperCase().concat(val.slice(1))
        return title
    })
    console.log(uppercase.join(" "))
}
titleCase("i am the best web developer")


function printRightTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

printRightTriangle(5);
/*
 Output:
 *
 * *
 * * *
 * * * *
 * * * * *
*/
