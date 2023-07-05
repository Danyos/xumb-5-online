let obj={

    surname:"Aramyan",
    country:"Sebastya",
    visa:"Merjvats"
}
Object.preventExtensions(obj) //deleted,and add chem karox anel
//  Object.freeze(obj) ///block all
// Object.seal(obj) // add chi arel
// delete  obj.visa
//   obj.country='Malatya'
//   obj.addres='yerevan'

// Object.defineProperty(obj, 'name', {
//     value: 'Martun',
//     writable:false,
//     configurable:true,
//     enumerable:true,
//
// });
// obj.name="Martin"

// console.log(obj)
for (const objKey in obj) {
    console.log(objKey)
}








