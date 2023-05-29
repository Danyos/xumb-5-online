<<<<<<< HEAD
// const car={
//     init:function (make,model){
//         this.make=make
//         this.model=model
//     },
//     getinfo:function (){
//         return "this is car. this popular car is form Germani. "+this.make+" "+this.model
//     }
//
// }
// const mcar=Object.create(car)
// mcar.init('Bmw',"x6")
// console.log(mcar.getinfo())



// let mycar=car
//
//
//     mycar.init("Mers","s classs")
//
// console.log(mycar.getinfo())




// function Car(make,model){
//     this.make=make
//     this.model=model
// }
//
// Car.prototype.getInfo=function (){
//         return "this is car. this popular car is form Chaperon. "+this.make+" "+this.model
// }
//
//
//
// let mcar2=new Car("Toyota Motors","lx 570 Black ")
// console.log(mcar2.getInfo())


let user=[]



const login={
    username:'',
    password:"",

    authication:function (data){
        if(data) {
            console.log("User Registred", this.username)
        }else{
            console.log("Invalid username or password. Registration failed", this.username)
        }
    }
}

const regiser=Object.create(login)


regiser.__proto__.createUser=function (uname,psw){
    if(this.validate(uname,psw)){
        this.username=uname
        this.password=psw
        return true
    }
        return false
}
regiser.__proto__.validate=function (username,password){
    return username.length>=4 && password.length>=6
}
=======
// function myArray(arr=[]){
//     this.member=arr
// }
//
// myArray.prototype.pop = function() {
//     let lastElement = this.member[this.member.length - 1];
//     this.member.length--;
//     return lastElement;
// };
//
// myArray.prototype.push=function(a){
//     this.member[this.member.length]=a
// }
//
// myArray.prototype.slice=function(a,b=null){
//     let code=[]
//     if(b && this.member[a] && this.member[b]){
//         if(a<b){
//             for(let i=a;i<b;i++){
//                 code.push(this.member[i])
//             }
//         }else{
//             return []
//         }
//     }else if(a && this.member[a] && b===null){
//         for(let i=a;i<this.member.length;i++){
//             code.push(this.member[i])
//         }
//     }
//     return code
// }
//
// myArray.prototype.mysplice=function (a,b=null,c=null){
//     let arr=[]
//     let b2
//     let a1=this.slice(0,a)
//     arr.push(...a1)
//     if(b && c){
//         b2= this.slice(a+b)
//         arr.push(c)
//         arr.push(...b2)
//     }else if(b){
//         b2= this.slice(a+b)
//         arr.push(...b2)
//     }
//     this.member=arr
//     return arr
// }
//
//
// let arr=new myArray([1,2,3,4,5,6,7])
// arr.mysplice(3,2)
// console.log(arr)


// function mydesktop(a){
//     console.log(this)
//     console.log(a)
//
// }
// // mydesktop.call({ id:1, name:"Vazgen", arr:[1,2,4,5]},25)
//
// mydesktop.apply([{ id:1, name:"Vazgen", arr:[1,2,4,5]}])



const greet =function (){
    console.log(` ${this.name}`)
}

let person={
    id:1,
    name:"Vazgen"
}
const greetPerson=greet.bind(person)

console.log(greetPerson)
// greetPerson()













>>>>>>> adf7c8048a4b9099d05896e730e4a52075ccc677




<<<<<<< HEAD
regiser.authication(regiser.createUser('Ar12a','Asatryan'))


console.log(login)
=======
>>>>>>> adf7c8048a4b9099d05896e730e4a52075ccc677



