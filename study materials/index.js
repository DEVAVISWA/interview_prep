const reverseString = (str) =>{
    let reversedString = str.split("").reverse().join("")
    return reversedString
}
console.log(reverseString("Benjamin"))

const longestWord = (sentence) =>{
    let longestWord = ""
    let splittedWords = sentence.split(" ")
    for(let word of splittedWords){
        if(word.length>longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}
console.log(longestWord("I am a good developer named Benjamina"))


const isPalindrome = (word) =>{
    let reversedword = word.split("").reverse().join("")
    if(word===reversedword){
        return "Its palindrome"
    }
        return"Not a palindrome"
}
console.log(isPalindrome("racecara"))


const removedup = (arr) =>{
 return [...new Set(arr)]
}
console.log(removedup([1,2,3,1,2,3,4,5,6,8,9,8]))


console.log(countVowels("Emmanuel Benjamin"))