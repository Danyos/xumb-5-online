// class User {
//     constructor(name) {
//         this.anun = name
//     }
//     incriment(){
//         console.log('class incriment')
//     }
//     static getData(){
//         return "hello World"
//     }
//
// }







// User.prototype.descriment=function (){
//     console.log('class descriment')
// }
//
// let u = new User("Armenuhi")
//
// u.__proto__.getCount=function (){
//     console.log("1000$")
// }
//
// // u.incriment()
// console.log(u)


// ____________________________________-static methods start
// console.log(User.getData())
// Math.random()

// Object.keys({'anun':"meruj"})//['anun']
//
//
//
// new Object()

// ____________________________________-static methods end


// example

// function Guest(name) {
//     this.anun = name
//     this.__proto__.incriment= function (){
//         console.log("function incriment")
//     };
// }
// Guest.prototype.descriment=function (){
//     console.log('class descriment')
// }
// let g = new Guest("Anahit")
// g.__proto__.getCount=function (){
//     console.log("1000$")
// }
// // g.incriment()
// console.log(g)







// new Object()

// let obj={
//     name:"Anahit",
//     usrname:"Mxitaryan",
//     parentName:"Smbati"
// }
//
//
//
// let test_1=Object.keys(obj)
// let test_2=Object.values(obj)
// let test_3=Object.entries(obj)
//
// console.log(test_1)
// console.log(test_2)
// console.log(test_3)

// ______________________________________________________________________

// class Stack{
//     constructor() {
//         this.stack=[]
//     }
//     push(item){
//        this.stack.push(item)
//     }
//     peek(){
//         if(!this.stack.length){
//             return null
//         }
//         return this.stack[this.stack.length-1]
//     }
//     isEmpty(){
//         return !!this.stack.length
//     }
//     size(){
//         return this.stack.length
//     }
//     clear(){
//         this.stack=[]
//         return true
//     }
// }
//
// let mystack=new Stack()
// mystack.push(10)
// mystack.push(20)
// mystack.push(30)
// mystack.push(40)
// mystack.push(50)
// console.log(mystack.peek())
// console.log(mystack.isEmpty())
// mystack.clear()
// console.log(mystack.size())
// console.log(mystack)



class CustomArray {
    constructor(length) {
        this.length = 0;
    }

    push(element) {
        this[this.length] = element;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        console.log(this)
        const lastElement = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastElement;
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

    map(callback) {

        const newArray = {
            length:this.length
        };


        for (let i = 0; i < this.length; i++) {
            newArray[i] = callback(this[i], i, this);
        }
        delete   newArray.length
        return Object.values(newArray);
    }
}

let arr = new CustomArray();
arr.push(1)
arr.push(3)
arr.push(5)
// arr.pop()

// arr.forEach(function (res,index,a){
//     console.log(res,index,a)
// })

// let aaa=[2,4,5]

let x= arr.map(res=>res*2)
console.log(x)
console.log(arr)