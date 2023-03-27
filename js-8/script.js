first:for(let i=2;i<10;i++){

    for (let j=0;j<10;j++){
        // console.log(`${i>9?i:"0"+i}:${j>9?j:"0"+j}=${j+i}`)
        if(j===3){
            break first
        }
        console.log(i+"x"+j+"="+i*j)
    }
    console.log("_____________________")
}
// 2x2=4
// 2x3=6
// let i=0
//
// do{
//     if(i===9){
//         break
//     }
//     console.log(i)
//     i++
//
// }while (true)


// while (true){
//     let p=prompt("greq pin")
//     if(p==='123'){
//         console.log('right')
//         break
//     }
// }