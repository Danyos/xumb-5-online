// mypromisse.then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })
// async function y() {
//     try {
//         const listdata = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await listdata.json()
//         console.log(x(data))
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// function x(res) {
//
// return res
//
//
// }
// y()


function z(func){
    setTimeout(()=>{
        func(2)

    },2000)
}
z(function (res){
    console.log(res)
})




// async function proccesData() {
//     try {
//         const mypromisse = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let randNumber = Math.random()
//                 if (randNumber > 0.5) {
//                     resolve(randNumber)
//                 } else {
//                     reject("This  number more then from 0.5")
//                 }
//             }, 1000)
//         })
//
//         console.log(mypromisse)
//     } catch (e) {
//         console.log(e)
//     }
//
// }
//
// proccesData()


// async function Myposts(){
//     try {
//         const data=await fetch('https://jsonplaceholder.typicode.com/photos')
//         let post=await data.json()
//         console.log(post)
//     }catch (e) {
//         document.write(e.message)
//     }
// }
//
// Myposts()

// throw new Error("Merujy hishec")


























