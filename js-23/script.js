// function Myobj(){

// }
// // let arr=[]
// // Object.prototype.Barev=function(){
// //     console.log('hello');
// // }

// let orgobj=new Object()

// Myobj.prototype.barev=function(){
//     console.log("Mer hayreniq");
// }
// let Orgarr=new Array()
// console.log(orgobj);
// console.log(new Myobj());
// // obj.name="Aram"
// // console.log(obj);




// function myArray2(){

// }
// let array1=new myArray2()
// console.log(array1);

// function myArray(arr=[]){
//     this.member=arr
  
// }

// myArray.prototype.push=function(a){
//     this.member[this.member.length]=a
// }

// myArray.prototype.slice=function(a,b=null){
//     let code=[]
//     console.log(this.member[b]);
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

// let arr=new myArray([1,2,3,4,5,6,7])

// arr.push(8)
// // this.aa="Daniel"
// console.log( arr.slice(2,4));
// // console.log( Orgarr);
// // pop shif unshift slice splice reverse 
// // map filter find







function myArray(arr = []) {
    this.namber = arr;
  }
  
  myArray.prototype.push = function(a) {
    this.namber[this.namber.length] = a;
  };
  myArray.prototype.pop = function() {
   
  
    let lastElement = this.namber[this.namber.length - 1];
    this.namber.length--;
    return lastElement;
  };
  
  let arg = new myArray([1, 2, 3, 4, 5, 6, 7]);
//   let das=arg.pop()
//   console.log(arg);


//  տարբերակ 2 pop


// function myArray(arr = []) {
//     this.namber = arr;
//   }
  
//   myArray.prototype.push = function(a) {
//     this.namber[this.namber.length] = a;
//   };
//   myArray.prototype.pop = function() {
   
  
//     let firstElement = this.namber[ undefined];
   
//     this.namber.length--;
//     return firstElement;
//   };
  
//   let arg = new myArray([1, 2, 3, 4, 5, 6, 7]);
//   let das=arg.pop()
//   console.log(arg);


// function myArray(arr = []) {
//         this.namber = arr;
//       }
      
//       myArray.prototype.push = function(a) {
//         this.namber[this.namber.length] = a;
//       };
// myArray.prototype.shift = function() {
//     if (this.namber.length === 0) {
//       return undefined;
//     }
// let firstElement = this.namber[0];
//     for (let i = 0; i < this.namber.length ; i++) {
//         this.namber[i] = this.namber[i + 1];
    

//     }
//     this.namber.length--;
//     return firstElement;
//   };
  
//   let arr = new myArray([1, 3, 4, 6, 8, 10, 12]);
// let dass=arr.shift()
//   console.log(arr)

     
