// let myvaribel=null
// let myvaribl2
// console.log(myvaribel)
// console.log(myvaribl2)
//
//
// console.log(window)
// function aa(){
//     var a=7
// }
// aa()



// Stack
// function foo(){
//     let x=20
//     let y=30
//     console.log(x,y)
// }
// foo()
//
//
// // heap
// let obj={
//     name:"Marat",
//     age:28
// }
//
// function modifyobject(){
//     obj.age=36
// }
// modifyobject()




// function add(a,b){
//     return a+b
// }
//
//
// let res=add(5,7)
// console.log(res)
//
// let obj={name:"Karen"}
//
// let obj2=obj
// obj2.name="Alice"
// console.log(obj.name)
// console.log(obj2.name)


// function Shape(color){
//     this.color=color
// }
// Shape.prototype.getColor=function (){
//     return this.color
// }
//
// function Circle(radius,color){
//     this.radius=radius
//     this.color=color
//
//
//
// }
// Circle.prototype=Object.create(Shape.prototype)
// Circle.prototype.constructor=Circle
// let isCircle=new Circle(5,"green")
// console.log(isCircle)


// let shaps=new Shape('red')
// //
// console.log(shaps)

console.log(typeof  [])



class Shape{
    constructor(color) {
        this.color=color
    }
    getColor(){
        return this.color
    }
}
class Circle extends Shape{
    constructor(radius,color) {
        super(color);
        this.radius=radius
    }

}

let Circle2=new Circle(5,"Yellow")

console.log(Circle2)