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




regiser.authication(regiser.createUser('Ar12a','Asatryan'))


console.log(login)



