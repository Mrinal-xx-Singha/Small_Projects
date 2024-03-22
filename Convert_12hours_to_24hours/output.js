const user ={
    name:"Mrinal",
    greet(){
        return `Hello , ${this.name}`
    },
    farewell:()=>{
        return `GoodBye, ${this.name}`
    }

}


console.log(user.greet());
console.log(user.farewell());