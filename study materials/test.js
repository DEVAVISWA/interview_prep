let reverseString = (word) => {
    let rev = word.split(" ").map((val) => {
        return val.split("").reverse().join("");
    }).join(" ");
    console.log(rev);
}

reverseString("Interview Happy");


let caps = (str) => {
    let splitted = str.split(" ")
    let capital = splitted.map((val, ind) => {
        return val.charAt(0).toUpperCase()
    })
    console.log(capital)
}
caps("i am an inevitable being")


let longWord = (word) => {
    let splitword = word.split(" ")
    console.log(splitword)
    let longestWord = "";
    for (let i = 0; i < splitword.length - 1; i++) {
        if (splitword[i].length > longestWord.length) {
            longestWord = splitword[i]
        }
    }
    console.log(longestWord)
}

longWord("I love coding in j")


let isPalindrome = (word) => {
    let reversed = word.split("").reverse().join("")
    if (word === reversed) {
        console.log("It is a palindrome")
    } else {
        console.log("It is not a palindrome")
    }
}
isPalindrome("racecara")


// let remDup =  (arr) =>{
//     let array = []
//     for(let num of arr){
//         if(!array.includes(num)){
//             array.push(num)
//         }
//     }
//     console.log(array)
// }
// remDup([1,2,3,4,4,5,6,6])

let remDup = (arr) => {
    return [...new Set(arr)]
}
console.log(remDup([1, 2, 3, 4, 4, 5, 6, 6]))


let areAnagram = (word1, word2) => {
    let sorted1 = word1.split("").sort().join("");
    console.log(sorted1)
    let sorted2 = word2.split("").sort().join("");
    console.log(sorted2)
    if (sorted1 === sorted2) {
        return true
    }

}
console.log(areAnagram("listen", "silent"))


let countVowels = (word) => {
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0
    for (let letter of word.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
}

console.log(countVowels("HellO World"))


let largestnum = (arr) => {
    return Math.max(...arr)
}
console.log(largestnum([1, 2, 3, 4, 5, 9, 4, 5]))


let isPrime = (num) => {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(10))


let factorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    return fact
}

console.log(factorial(10))


let Fib = (num) => {
    let num1 = 0
    let num2 = 1
    let nextTerm

    for (let i = 1; i <= num; i++) {
        console.log(num1)
        nextTerm = num1 + num2
        num1 = num2
        num2 = nextTerm
    }
}
Fib(10)


const stringWithSpaces = "  Hello    world  ";
const stringWithoutSpaces = stringWithSpaces.split(" ").join("");
console.log(stringWithoutSpaces); // Output: "Helloworld"


let numericals = [1, 2, 3]
for (let num of numericals) {
    console.log(num)
}

for (let num in numericals) {
    console.log(num)
}

const person = {
    name: "John",
    age: 30,
    role: "Developer"
};
for (let key in person) {
    console.log(person[key])
}

numericals.forEach(num => console.log(num))


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.floor(Math.random() * 10)

        if (number < 5) {
            resolve(`Success and it is ${number}`)
        }
        else {
            reject(`Error and it is ${number}`)
        }
    })
})

myPromise.then(value => console.log(value)).catch(error => console.log(error))