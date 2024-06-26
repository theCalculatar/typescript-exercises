class Person {
    name: string
    age: number
    private socialSecurityNumber:number //private property socialSecurityNumber
    constructor(name:string,age:number,socialSecurityNumber:number){
        this.name = name
        this.age = age
        this.socialSecurityNumber = socialSecurityNumber
    }
    //method to get name
    getName(){
        return this.name
    }
    //method to get age
    getAge(){
        return this.age
    }

}