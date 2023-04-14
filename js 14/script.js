// let name="Srbuhi"
// let arr=name.split("")
// //[1,2,3,5,6,7,8]//7
// let result=''
// for (let i=0; i<arr.length; i++){
//     let x=Math.floor(Math.random()*arr.length)
//     result+=arr[x]
//     arr.splice(x,1)
//     i--
// }
//
// console.log(result)

// for (let i = 0; i < 50; i++){
//     let x=Math.floor(Math.random()*700)
//     console.log(x)
// }

// let array=[
//     [2,7,6,8,14],
//     [2,7,5,7],

// ]
// array[0].push(10)
// console.log(array)
// 2
// [3,7,11,15,14]




// 3
// let array=[
//     ['x','o','x'],
//     ['x','o','x'],
//     ['o','o','o'],
// ]










let array=[
    [2,7,6,8,14],
    [2,7,5,7],

]
for (let i=1; i<array.length; i++){
   for (let j=0; j<array[i].length; j++){
       console.log(array[i][j])
       array[0][j] += array[i][j]||0
   }
}
console.log(array)







