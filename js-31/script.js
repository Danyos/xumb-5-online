// class Feacture {
//
//     constructor(a, b) {
//         if (new.target === Feacture) {
//             throw  new Error("this class abstraction ")
//         }
//         this.a = a
//         this.b = b
//     }
//
//     plus() {
//         return this.a + this.b
//     }
//
//     minus() {
//         return this.a - this.b
//     }
// }
//
// class Calculator extends Feacture {
//     constructor(a, b, c) {
//         super(a, b);
//         this.c = c
//     }
//
//     sum() {
//         if (this.c === '+') {
//             return this.plus()
//         } else if (this.c === '-') {
//             return this.minus()
//         } else {
//             return 'namn nshan menq chunenq'
//         }
//     }
// }
//



function Feacture(a,b){
    if(new.target===Feacture){
        throw new Error("This function abstaction method")
    }
    Feacture.prototype.plus= function (){
        return a + b
    }
    Feacture.prototype.minus= function (){
        return a  - b
    }



}


function Calculator(a, b, c){

    Feacture.call(this,a,b)
    this.c=c

}
Calculator.prototype=Object.create(Feacture.prototype)
Calculator.prototype.constructor=Calculator

Calculator.prototype.sum=function (){
    if (this.c === '+') {
        return this.plus()
    } else if (this.c === '-') {
        return this.minus()
    } else {
        return 'namn nshan menq chunenq'
    }
}




let calc=new Calculator(1,2,"+")

console.log(calc.plus())

new Feacture()