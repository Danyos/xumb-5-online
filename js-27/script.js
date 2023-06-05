// class Feacture{
//     constructor(data=[]) {
//         this.array=data
//         this.avgRes=0
//     }
//     // The arithmetic average start
//     avg(){
//         for (let v of this.array){
//             this.avgRes+=v
//         }
//         return this.avgRes/this.array.length
//     }
//     // The arithmetic average end
//     module(){
//         return this.array.map(res=>res<0?res*-1:res)
//     }
//
//     max(){
//         let value=this.array[0]
//         for (let v of this.array){
//             if(value<v){
//                 value=v
//             }
//         }
//         return value
//     }
//     repetitive(){
//         let value=[]
//         for (let v of this.array){
//             if(!value.includes(v)){
//                 value.push(v)
//             }
//         }
//         return value
//     }
//
//
//
//
// }
//
// let feacture=new Feacture([1,2,88,-3,4,-5,8,94,-5,6,25,88,94,14,27,155,15,87])
// feacture.avg()
// feacture.module()
// let repetitive=feacture.repetitive()
//
//
//
//
// console.log(repetitive)

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
        this.isRuning = false
    }

    startEngin() {
        this.isRuning = true
        console.log('The engine has started')

    }

    stopEngin() {
        this.isRuning = false
        console.log('The engine has stoped')

    }

    drive(arg=1) {
        if (this.isRuning) {
            console.log(`The ${this.make} ${this.model} is driving `)
        } else {
            console.log('please start the engine first.')
        }
        return arg
    }


}

class ElectronicCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range
    }

    charger() {
        console.log(`The ${this.make} ${this.model} is driving with electronic range of ${this.range} miles`)
    }

    drive(arg = 1) {
        return super.drive(arg);
    }


}


let car2 = new ElectronicCar("tesla", 'Model 5', 2023, 300)

console.log(car2.drive(2))






// ['spple','orange']
//













