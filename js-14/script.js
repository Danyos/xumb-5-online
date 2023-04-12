// function karimeqena(a, b=5) {
//   // ....
//   return a/b
// }
//
// let x=karimeqena(10,2)
//
// console.log(x)

// function validate(args,min=[3,10],mijakayq=[65,122]) {
//     if(args.length<min[0] || args.length>min[1]){
//         return "sxal"
//     }
//     if(args[0]==='+'){
//         args=args.split('')
//         args.shift()
//         args=args.join('')
//     }
//
//     for (let i=0;i<args.length;i++){
//         if(args.charCodeAt(i)<mijakayq[0] || args.charCodeAt(i)>mijakayq[1]){
//             return false
//         }
//     }
//     return true
// }
// let name=validate("Ana",[3,4],[65,122])
// let surname=validate("Aydan",[5,10])
// let phonenumber=validate("37498657547",[9,12],[48,57])
// console.log(name)
// console.log(surname)
// console.log(phonenumber)





// let a1=function (){
//     console.log("one")
// }
//
// a1()
//
// a2()
// function a2(){
//     console.log("two")
// }
// _______________________________________



// arrow functions
// let a1=function (){
//     console.log("one")
// }
//
// a1()
// let a=()=>{
//     console.log("a")
// }
// a()




// let a1=function (arg){
//     console.log("one"+arg)
// }
//
// a1(7)
// let a=arg=>{
//     console.log("a"+arg)
// }
// a(7)


// let a1=function (arg){
//     console.log("one"+arg)
// }

// a1(7)
// let a=(arg,arg2)=>{
//     console.log("a"+arg+arg2)
// }
// a(7,8)

//
//
// let a1=function (arg,arg2){
//    return arg+arg2;
// }
//
// console.log(a1(7,8))
// let a=(arg,arg2)=>arg+arg2;
// let b=(arg,arg2)=>{
//     // ....
//     return arg+arg2
//
// };
// let c=(arg,arg2)=>(
//     arg+arg2
// )
//
// console.log(a(7,8))
// console.log(b(7,8))
// console.log(c(7,8))
//
//
//
//

let d= (a,b)=> a%b===0 ? "even":"odd"

console.log(d(8,4))

function d1(a){
    if(a%2===0){
        return "even"
    }
    return "odd"

}

console.log(d1(8))









// https://learn.javascript.ru/function-expressions

// unenq prompt prompti mej grum eq anun veradarcni dhez // anushik=> kianhsu
// Math.random()



