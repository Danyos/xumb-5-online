// const price = [
//     {
//       id: 1,
//       name: "Valod",
//       payment_way: "visa",
//       price: "1500$",
//     },
//     {
//       id: 2,
//       name: "Vazgen",
//       payment_way: "paypal",
//       price: "1400$",
//     },
//     {
//       id: 3,
//       name: "grish",
//       payment_way: "bitcoin",
//       price: "1700$",
//     },
//     {
//       id: 4,
//       name: "Karo",
//       payment_way: "visa",
//       price: "100$",
//     },
//     {
//       id: 5,
//       name: "Serob",
//       payment_way: "bitcoin",
//       price: "500$",
//     },
//     {
//         id: 6,
//         name: "dfwerg",
//         payment_way: "idram",
//         price: "500$",
//       },
//   ];


// let res=price.reduce((previusvalue,currentValue)=>{
// if(previusvalue[currentValue.payment_way]){

//     previusvalue[currentValue.payment_way]+=parseFloat(currentValue.price)

// }else{
//     previusvalue[currentValue.payment_way]=parseFloat(currentValue.price)
// }
// return previusvalue


// },{})
// console.log(res);


// {
//     id: 3,
//     name: "dfcews",
//     payment_way: "idram",
//     price: "600$",
//   }
  
//   let newobj = {
//   idram:1100,
//   visa:1500,
//   };

//   price.forEach((res) => {

//     if (newobj[res.payment_way]) {
//             newobj[res.payment_way]+=parseFloat(res.price)
    
//     }else{

//       newobj[res.payment_way]=parseFloat(res.price)
  
//     }
  
//   });
  
//   console.log(newobj);


// let info= {
//     id: 6,
//     name: "dfwerg",
//     payment_way: "idram",
//     price: "500$",
//   }
//   let x='price'
//   console.log(info.x);
//   console.log(info['x']);


  
//   console.log(info[x]);





// let a=7
// let b=8
// a+b
// "a"+"b"

// let student=[
//     {
//         id:1,
//         name:"Aram",
//         lesson_way:"web0",
//         lesson_type:"online",
//         startLesson:"01.20.2023",
//         payment:[
//             {
//                 id:1,
//                 student_id:1,
//                 paymentDay:"01,21,2023"
//             },
//             {
//                 id:2,
//                 student_id:1,
//                 paymentDay:"02,21,2023"
//             },
//             {
//                 id:3,
//                 student_id:1,
//                 paymentDay:"02,21,2023"
//             },
//         ]
//     }, {
//         id:2,
//         name:"Srbuhi",
//         lesson_way:"web0",
//         lesson_type:"online",
//         startLesson:"01.20.2023",
//         payment:[
//             {
//                 id:1,
//                 student_id:1,
//                 paymentDay:"01,21,2023"
//             },
//             {
//                 id:2,
//                 student_id:1,
//                 paymentDay:"02,21,2023"
//             },
//             {
//                 id:3,
//                 student_id:1,
//                 paymentDay:"02,21,2023"
//             },
//         ]
//     }, {
//         id:3,
//         name:"Astxik",
//         lesson_way:"web0",
//         lesson_type:"online",
//         startLesson:"02.10.2023",
//         payment:[
//             {
//                 id:1,
//                 student_id:1,
//                 paymentDay:"01,21,2023"
//             },
//             {
//                 id:2,
//                 student_id:1,
//                 paymentDay:"02,21,2023"
//             },
//             {
//                 id:3,
//                 student_id:1,
//                 paymentDay:"02,21,2023"
//             },
//         ]
//     }, {
//         id:4,
//         name:"Vahe",
//         lesson_way:"Javascript",
//         lesson_type:"online",
//         startLesson:"03.12.2023",
//         payment:[
//             {
//                 id:1,
//                 student_id:1,
//                 paymentDay:"01,21,2023"
//             },
//             {
//                 id:2,
//                 student_id:1,
//                 paymentDay:"02,21,2023"
//             },
//             {
//                 id:3,
//                 student_id:1,
//                 paymentDay:"02,21,2023"
//             },
//         ]
//     }
// ]
// let priceList=[
//     {
//         id:1,
//         student_id:1,
//         paymentDay:"01,21,2023"
//     },
//     {
//         id:2,
//         student_id:2,
//         paymentDay:"01,24,2023"
//     },
//     {
//         id:3,
//         student_id:3,
//         paymentDay:"02,04,2023"
//     },
//     {
//         id:4,
//         student_id:2,
//         paymentDay:"02,18,2023"
//     },
//     {
//         id:5,
//         student_id:1,
//         paymentDay:"02,21,2023"
//     },
//     {
//         id:6,
//         student_id:3,
//         paymentDay:"03,04,2023"
//     },
//     {
//         id:7,
//         student_id:2,
//         paymentDay:"03,10,2023"
//     },
//     {
//         id:8,
//         student_id:4,
//         paymentDay:"03,15,2023"
//     },
//    {
//         id:5,
//         student_id:1,
//         paymentDay:"02,21,2023"
//     },
// ]


// student.forEach(res=>{
//     console.log(res);
//     console.table(res.payment)
//     // let pay=priceList.filter(data=>data.student_id===res.id)
//     // console.table(pay)
// })


// let list={
//     a:21,
//     b:22,
//     c:32,
//     d:41
// }


// let c=Object.entries(list)
// c.forEach(([key,value])=>{
//     console.log(key);
// })



// let [key,v]=[1,"a","dws"]


// let c=Object.entries(list)
// c.forEach((arg)=>{
//     console.log(arg[0]);
//     console.log(arg[1]);

// })


// let y=Object.values(list)
// console.log(y);

// let x=0
// let a=Object.keys(list)
// a.forEach(res=>{
//     x+=list[res]
// })
// let x=0
// for (const key in list) {
//    x+=list[key]
// }

// console.log(x);



let users = [
    {
      id:2,
      name: "user1",
      password: "password1",
      email: "user1@example.com",
      age: 25
    },
    {
      id:3,
      name: "user2",
      password: "password2",
      email: "user2@example.com",
      age: 30
    },
    {
      id:4,
      name: "user3",
      password: "password3",
      email: "user3@example.com",
      age: 40
    }
  ];
  
// 2
// promptov log and pass
// sarqel login passwordi hamakarg paymanery vidyoum asum em


//   let a=[
//     {
//         id:1,
//         name:"anun"
//     },
//     {
//         id:2,
//         name:"karine"
//     }
//   ]
// 1. button sexmenq mez beri 
// 1 hat prompt vortex kgre    
//  dher uzac anun erb kgreq kverjacneq cuyc tak vor da avelacnel e zangvaci mej


  





