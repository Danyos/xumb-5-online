// let pr1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Barev")
//     },1000)
// })
// let pr2=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Hi")
//     },1000)
// })
// let pr3=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Hello")
//     },1000)
// })
// let pr4=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("privet")
//     },1000)
// })
// let pr5=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("bonjugh")
//     },1000)
// })
//
// Promise.all([pr1,pr2,pr3,pr4,pr5]).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })
// async function FetchtDataApi(url){
//  try {
//      const data=await fetch(url)
//      const dataJson=await data.json()
//
//      return dataJson
//  }catch (e) {
//      return e
//  }
// }
//
// let url=[
//     'https://jsonplaceholder.typicode.com/todos',
//    'https://jsonplaceholder.typicode.com/posts',
//    'https://jsonplaxc sdcecholder.typicode.com/users',
// ];
// // let block=Promise.all(url)
// //     .then(result=>{
// //     return Promise.all(result.map(res=>res.json()))
// // }).then(res=>{
// //     console.log(res)
// // })
// //     .catch(err=>{
// //     console.log(err)
// // })
//
// const promises=url.map(dataUrl=>FetchtDataApi(dataUrl))
//
// Promise.all(promises).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })



// const texts = await Promise.all(url.map(async function (urls) {
//     const resp = await fetch(urls);
//     return resp.text();
// }))

// axios({
//     url:'https://jsonplaceholder.typicode.com/photos',
//
// }).then(res=>{
//     console.log(res.data)
// })
// fetch('https://jsonplaceholder.typicode.com/photos').then(res=>{
//   return res.json()
// }).then(res=>{
//     console.log(res)
// })

async function getUser() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
async function FetchtDataApi(){
 try {
     const data=await fetch('https://jsonplaceholder.typicode.com/photos')
     const dataJson=await data.json()

     console.log(dataJson);
 }catch (e) {
     return e
 }
}
getUser()
FetchtDataApi()