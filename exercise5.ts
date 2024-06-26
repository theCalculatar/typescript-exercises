class Calculator{
    
    //addition funtion 
    add(num1:number,num2:number){
        return num1 + num2

    }

    //minus function
    minus(num1:number,num2:number){
        return num1-num2
        
    }

    //divide function
    divide(num1:number,num2:number){
        if(num2==0){
            return Infinity
        }
        return num1/num2
    }

    //multiply function
    multiply(num1:number,num2:number){
        return num1 * num2
    }
}

// input validator method return true if the input is a number or otherwise
function validate(value:any){
    if (typeof value ==  'number'){
        return true
    }else return false
}

