const prompt = require("prompt-sync")({sigint:true})

let age= prompt("Hey whats your age ?")
console.log(age)
console.log(typeof age)
age =Number.parseInt(age) //converts the type of variable to number
console.log(typeof age)

if(age<18){
    console.log("You can't drive")
}
else if(age>=18 && age<=66){
    console.log("You can drive")
}
else{
    console.log("You can't drive")
}

// we can use alert() message instead of console.log because
// alert() function displays a message box with a specified message and an OK button. It halts the further execution of the code until the user presses the OK button