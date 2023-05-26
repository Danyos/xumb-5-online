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




















