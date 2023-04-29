// const x = [
//     [1, 2, 2],
//     [2, 1, 2],
//     [1, 2, 2],
//   ];
//
//
// function fn(array){
//  let windercol=-1
//  let firstRow=array[0]
// firstRow.some((item,columindex)=>{
//     if(array.every((row)=>row[columindex]===item)){
//         windercol=columindex
//     }
//     return array.every((row)=>row[columindex]===item)
// })
//     return windercol
// }
// console.log(fn(x))

// let x=[{},{},{},{},{},{},{},{},{}]

// let obj={
//     name:"jon",
//     "age":20,
//     "merry":true,
//     "country-Address":"USA",
//     "city-yerevan":["yerevan","Gyumry","Vanadzor"],
//     base:"base64"
// }
// console.log(obj)

let user=[
    {
        id:1,
        name:"Ivan",
        age:20,
        country:"USA",
        merry:true,
    },
    {
        id:2,
        name: "Jiro",
        age:17,
        country:"Armenia",
        merry:false,
    }
]
user.push({
    id:3,
    name: "Karapet",
    age:27,
    country:"England",
    merry:false,
})



user.forEach(res=>{
    console.log(res.country,res.name)
    console.log(res)
})







// let x=[1,2,4,6]
//
// user[1].name="Mxitar"
// console.log(user)













// obj.name="Ivan"
// obj.country="USA"
//
// delete obj.name
// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.merry)


// let fullname="Mxitar"
// console.log(fullname)
//
// fullname="Muxi"
// console.log(fullname)





















// let arjeq=[ "a", "b", "c","d" ]
//
// arjeq.forEach(function(value,index){
//     console.log(value,index)
// })


// let x=arjeq.some(function (res){
//     return res===20
// })
// console.log(x)

// let y=arjeq.every(function (res){
//     return res ===2
// })
//
// console.log(y)


// let parse=x1.flat(Infinity)//[1, 2, 2, 3, 2, 2, 2, 3, 1, 2, 1, 1, 1, 2, 1, 3]
//
// let sqrt=Math.sqrt(parse.length)
//
//
//
// for (let i=0; i<parse.length; i+=sqrt){
//     console.log(parse[i])
// }






















// const price=[
//     {
//         id:1,
//         name:"Valod",
//         payment_way:"visa",
//         price:"1500$"
//     },
//     {
//         id:2,
//         name:"Vazgen",
//         payment_way:"paypal",
//         price:"1400$"
//     },
//     {
//         id:3,
//         name:"grish",
//         payment_way:"bitcoin",
//         price:"1700$"
//     },
//     {
//         id:4,
//         name:"Karo",
//         payment_way:"visa",
//         price:"100$"
//     },
//     {
//         id:5,
//         name:"Serob",
//         payment_way:"bitcoin",
//         price:"500$"
//     },
//     {
//         id:6,
//         name:"uy",
//         payment_way:"visa",
//         price:"1000$"
//     },
// ]
//
// price.forEach(res=>{
//     console.log(res.price)
// })

// tnayin gumarnery stadartvorel u pahel nor obj mej ynst irenc gumari
// orinak
// {
//     bitcoin:"yndhanur gumar",
//     visa:"yndhanur gumar",
//     paypal:"yndhanur gumar"
//
// }




