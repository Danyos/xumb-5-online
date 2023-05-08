// let count=document.querySelector('.count')
// let decrement=document.querySelector('.decrement')
// let increment=document.querySelector('.increment')
//
// let num=10
// function view(){
//     count.innerHTML=num
// }
// view()
//
// increment.addEventListener('click',function () {
//     num++
//     view()
// })
// decrement.addEventListener('click',function () {
//     num--
//     view()
// })

//
// ________________2_______________________
let increment=document.querySelector('.increment')
let mybase=document.querySelector('.mybase')
let atage
function myaTag(){
     atage=document.querySelectorAll('.atage')
    atage.forEach(tag=>{
        tag.addEventListener('click',function (){
            tag.innerHTML+="0"
        })
    })
}
myaTag()

increment.addEventListener('click',function () {
  //   mybase.innerHTML+= `
  // <a href="#" class="atage">${parseInt(atage[atage.length-1].innerHTML)+1}
  // </a>`
  //   let atags=document.createElement('a')
  //   atags.setAttribute('href','#')
  //   atags.setAttribute('class','atage')
  //   atags.innerHTML=+parseInt(atage[atage.length-1].innerHTML)+1
  //   mybase.appendChild(atags)

   let t= `
  <a href="#" class="atage">${parseInt(atage[atage.length-1].innerHTML)+1}
  </a>`
    mybase.insertAdjacentHTML('beforeend',t)

    myaTag()
})