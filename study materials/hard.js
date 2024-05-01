// const capital = (obj) => {
//     let cap = obj.reduce((acc, val, ind, arr) => {
//         console.log(acc)
//         console.log(val)
//         for (let key in val) {
//             console.log(key)
//             let value = val[key]
//             key = key.toUpperCase()
//             acc[key] = value
//         }
//         return acc
//     }, {})
//     console.log(cap)
// }
// capital([{ jack: "Three", jill: "Two", And: "one" }])


let numberOfOccurrence = (array) =>{
    let count = array.reduce((acc, val, ind, arr)=>{
        if(acc[val]){
            acc[val] += 1
        }else{
            acc[val] = 1
        }
        return acc
    },{})
    console.log(count)
}
numberOfOccurrence([3,4,3,5,3,6] )

let arr = ['geeks', 2, 'geeks', 2, 'Javascript', 4,'Javascript', 5, 'for', 6, 'Javascript', 1,'for', 5, 7, 8, 'for',2];
const counter = {};
arr.forEach(ele => {
	if (counter[ele]) {
		counter[ele] += 1;
	} else {
		counter[ele] = 1;
	}
});
console.log(counter)

// let occurresnces = (array) =>{
//     let count = array.reduce((acc, val, ind, arr)=>{
//         if(acc[val]){
//             acc[val] +=1
//         }else{
//             acc[val] = 1
//         }
//         return acc
//     },{})
//     console.log(count)
// }
// occurresnces(["jack","And","jack", "jill","jack","jill"])


// let prime = (num) =>{
//     for(let i=2; i<num/2; i++){
//         if(num%i===0){
//             return "not prime"
//         }
//         return "prime"
//     }
// }
// console.log(prime(7))

// const fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Orange']
// fruits.splice(2, 1, 'Kiwi')
// console.log(fruits)
// const sliced = fruits.slice(0,1)
// console.log(sliced)

let titleCase = (str) =>{
    let splitwords = str.split(" ")
    let mapped = splitwords.map((val, ind, arr)=>{
        return val.slice(0,1).toUpperCase().concat(val.slice(1))
    })
    console.log(mapped.join(" "))
}
titleCase("the quick brown fox")

const capital = (obj) =>{
   let reduced = obj.reduce((acc, val, ind, arr)=>{
    for(let key in val){
        acc[key.toUpperCase()] = val[key]
    }
    return acc
   },{})
   console.log(reduced)
}
capital([{ jack: "Three", jill: "Two", And: "one" }])

let numberOfOccurrences = (arr) =>{
    let reduced = arr.reduce((acc, val, ind , arr)=>{
        if(acc[val]){
            acc[val]++
        }
        else{
            acc[val] = 1 
        }
        return acc
    },{})
    console.log(reduced)
}
numberOfOccurrences([3,4,3,5,3,6])