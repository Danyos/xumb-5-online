// let number = "1,99"
// let a = parseFloat(number.slice(0, number.indexOf(",")));
// let b = parseFloat(number.slice(number.indexOf(",") + 1));
// // a = a + 1;
//
// // 8,16,32
// let mi = a//8
// while (mi < b) {
//     if (mi === a) {
//         console.log(++mi)
//     }
//     if (mi * 2 > b) {
//         break
//     }
//
//     mi *= 2
//     console.log(mi)
//
// }

// let number = prompt("Գրեք թիվը", "25468");
// let res = "";
//
// for (let i = 0; i < number.length; i++) {
//
//   if (number[i] % 2 == "0" && number[i - 1] % 2 == "0") {
//     res += "-";
//   }
//     res += number[i];
//
// }
//
// console.log(res);


// function parse2(){
//     alert("Barev")
// }
// function parse(){
//     alert("hello")
//     parse2()
// }

// let x=alert(7)
// console.log(x)

// let y=prompt()
// console.log(y)

// function MyAlert(arg,arg2){
//
//
//     return arg+arg2
//
// }
//
//
//
// let x=MyAlert(17,23)
// console.log(x)




// function count(num){
//     if(num<0){
//         num *= -1
//     }
//     num=num.toString()
//     return num.length
//
// }
//
// let c=count(prompt('greq tiv'))
// console.log(c)

// let x=0
// let arr=[]
// function tartel(){
//     arr.push(x)
//     x++
//
//     console.log(arr)
// }



let state=true
function f() {
    if(state){
        document.body.style.background='red'
        state=false
    }else{
        document.body.style.background='green'
        state=true
    }
}

// https://learn.javascript.ru/function-basics















































