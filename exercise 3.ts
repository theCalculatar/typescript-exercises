//function that takes two parms and return the sum
const sum = (num1:number,num2:number):number=>{
    return num1 + num2
}

//function that return a fixed number 
const fixedNumber = () => {
    return 10
}

//function that takes optional boolean and string and return string 
//depending on whethere boolean is true or false 
const thatFunction = (input:string,makeCaps:boolean):string =>{
    return makeCaps? input.toUpperCase():input.toLowerCase()
}
