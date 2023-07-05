for (let i=0;i<10;i++){
    console.log(i)
}



// let p1=new Promise(
//     function (resolve, reject) {
//  setTimeout(function (){
//      resolve("Hajox")
//  },2000)
// })
//
// p1.then((res)=>{
//     return res+" "+" Data"
// }).then(data=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
fetch('https://jsonplaceholder.typicode.com/users/8')
    .then(json=>json.json())
    .then(res=>{
        a(res)
    }).catch(rres=>{
    console.log(rres)
})

function a(arjeq){
    console.log(arjeq)
}
setTimeout(function (){
    console.log('hi how are you')
},0)

for (let i=10;i<30;i++){
    console.log(i)
}
for (let i=30;i<40;i++){
    console.log(i)
}
console.log("barev")