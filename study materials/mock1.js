const reverse = (strs) => {
    let str = strs.split(" ")
    let str1 = []
    for (let word of str) {
        if (word.length >= 5) {
            word = word.split("").reverse().join("")
        }
        str1.push(word)
    }
    let sol = str1.join(" ")
    console.log(sol)
}
reverse("Hi I am Emmanuel")


const reversed = (strs) => {
    let str = strs.split(" ")
    let mapped = str.map((word) => {
        if (word.length >= 5) {
            return word.split("").reverse().join("")
        } else {
            return word
        }
    })
    console.log(mapped.join(" "))
}
reversed("Hi I am Emmanuel")



const commonElements = (arr1, arr2) => {
    let array1 = arr1.sort((a, b) => a - b)
    let array2 = arr2.sort((a, b) => a - b)
    let array = []
    for (let val of array1) {
        if (array2.includes(val)) {
            array.push(val)
        }
    }
    console.log(...new Set(array))
}
commonElements([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4])


const commonElementsed = (arr1, arr2) => {
    let array1 = arr1.sort((a, b) => a - b)
    let array2 = arr2.sort((a, b) => a - b)

    const filtered = array1.filter((val) => {
        if (array2.includes(val)) {
            return val
        }
    })
    console.log(...new Set(filtered))
}
commonElementsed([1, 2, 4, 3, 4, 5, 8], [78, 7, 8, 4, 4])


const merge = (arr1, arr2) => {
    const merged = arr1.concat(arr2)
    console.log(...new Set(merged))
}

merge([1, 2, 3, 4, 1, 2, 3, 4], [5, 6, 7, 8])


const common = (arr1, arr2) => {
    const commonvalues = arr1.filter((val) => {
        return arr2.includes(val)
    })
    console.log(commonvalues)
}
common([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])


const sortArray = (arr) => {
    let sortedArray = arr.sort((a, b) => a - b)
    console.log(sortedArray)
}
sortArray([2, 8, 1, -3, 6, 7, 5, 4, -12, 82, 31, -34, 56, -76, 57, 82])





const fib = (val)=>{
    let num1 = 0
    let num2 = 1
    let nextTerm

    for(let i=0; i<val; i++){
        console.log(num1)
        nextTerm = num1+num2
        num1 = num2
        num2= nextTerm
    }
}
fib(6)


const fact = (val) =>{
    let fact = 1
    for(let i=1; i<=val; i++){
        fact = fact * i
    }
    console.log(fact)
}
fact(4)


let unrepeated = (word) =>{
    let letters = word.toLowerCase().split("")
    console.log(...new Set(letters))
}
unrepeated("Emmanuel")