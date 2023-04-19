// let t=function (){
// return 1
// }
//
//
// console.log(t())
let arr = [10, 22, 3]


// 1.

// let f=arr.find(res=>res===32)
// console.log(f)


// 2.

let f=arr.reduce(function (previousValue,currentValue){
    previousValue+=currentValue+", "

    return previousValue


},"")
console.log(f)

// let mp=arr.map(function (res){
//     if(res>50){
//         return res*2
//     }
//     return res
// })
// let mp2=mp.filter(res=>res>50)
// console.log(mp2)


// function mymap(arjeq, callback) {
//     let x=[]
//     for (const arjeqElement of arjeq) {
//        let call=callback(arjeqElement)
//         x.push(call)
//     }
//     return x
//
// }
//
// let mp = mymap(arr, function (arjeqElement) {
//     return arjeqElement%2
// })
// console.log(mp)


// let x=[]
// for (let i=0;i<arr.length;i++){
//         x.push(arr[i]/2)
// }
// console.log(x)


//
// let x=arr.filter(function (res){
//     return res%2===0
// })
// let x2=arr.filter(res=>res%2===0)
//
// console.log(x2)


// function MyFilter(a,func){
//     let narr=[]
//
//     for (const aElement of a) {
//         if(func(aElement)){
//             narr.push(aElement)
//         }
//     }
//     return narr
//
// }
//
// let x=MyFilter(arr,function (arg){
//     return arg%2 === 0
// })
// console.log(x)


// let even=[]
// for (const number of arr) {
// if(number%2===0){
//     even.push(number)
// }
// }
// console.log(even)