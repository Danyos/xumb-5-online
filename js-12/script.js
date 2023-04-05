// let x=7
// x=x.toString()
// console.log(x)
// // խնդիր 1 առաջին լուծման ձև
// const numbers = [1, 5, -1, 7, -5, -4, 9, 8, 2, -10];
// let positiveNumbers = [];
// let total = 0;
//
//
// for (let i = 0; i < numbers.length; i++) {
//
//   if (numbers[i] > 0) {
//
//     positiveNumbers.push(numbers[i]);
//     total += numbers[i];
//   }
// }
//
// total=total/positiveNumbers.length
// console.log(total)
// let number = [1, 5, -1, 7, -5, -4, 9, 8, 7, 2, -10];
// let res = [];
// let total = 0;
// for (let i = 0; i < number.length; i++) {
//   if (number[i] > 0) {
//     res.push(number[i]) ;
//     total+=number[i]
//   }
// }
// console.log(res);
// console.log(total);
// let na = "Aram";
// // console.log(na[0]===na[0].toLowerCase())
//
// //
// let res=''
// for (let i=na.length-1;i>=0;i--){
//   if(na.length-1===i){
//     res+=na[i].toUpperCase()
//   }else{
//     res+=na[i].toLowerCase()
//   }
//
// }
// console.log(res)


// v2
// let name="Tatev"
// let arr=name.split("")
// arr[0]=arr[0].toLowerCase()
// arr.reverse()
// arr[0]=arr[0].toUpperCase()
// arr=arr.join("")
// console.log(arr)
// let num=[10,20,30,40,50,60,70,80,90]
// for (let [i,x] of num.entries()){
//   console.log(x,i)
// }
// for (let i in num){
//   console.log(num[i])
// }


// destructuring

// let [a,b,c]=[7,8,99]


// let x=[10,5]

// let num2=[[0,10],[1,20],[2,30],[3,40],[4,50],[5,60],[6,70],[7,80],[8,90]]
// let x1=num[0][0]
// let x2=num[0][1]
// let [x1,x2]=num2[1]
// console.log(x1,x2)

let num=[99,54,14,24,10,11,9,5,20,30,40,50,60,70,80,90]
let min=num[0]//5
for (const numElement of num) {
  if(min>numElement){
    min=numElement
  }

}
console.log(min)

// 5. gtnel ayn tareri qanaky vor indexy mets e tvyal x tvic
// veradarcnel nor zagvaci tesqov

// 6.gtnel zagvaci metsaguyn tary

// 7. zangvaci 2 rd amenaets arjeqy

// 8. gtnel zagvaci poqraguyn tary

// 9. gtnel zagvaci mej ayn tarery
// voronq chunen ayd zangvaci mej voreve andam vor kbajanvi ir vra anmnacord