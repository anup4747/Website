console.log("function in java script")



function oneplus (x,y){
    return 1 + (x+y)/2
}

// 2nd method

const sum = (p,q)=> {
    return p+q
}
const hello = ()=> {
    console.log("Hey how was your day!")
    return "hi"
}

let a = 1
let b = 2
let c = 3
let v = hello()

console.log("The average of a and b is :",oneplus(a,b))
console.log("The average of b and c is :",oneplus(b,c))
console.log("The average of a and c is :",oneplus(a,c))
console.log(sum(a,b))
console.log(v)


