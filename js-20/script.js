let answer=document.querySelector('#answer')
let again=document.querySelector('.again')
let btn=document.querySelector('.btn')
let text=document.querySelector('.text')
let seconds=document.querySelector('.seconds')
let minseconds=16
let x
let fruct=["Emma",
    "asd",
    "zxc",
    "qwer",


]
fruct=fruct.sort(()=> 0.4-Math.random())

let f_index=0

console.log(fruct)
let hashiv={
    succses:0,
    worning:0
}


function question(){
    let res=fruct[f_index]
    if(!res){
        text.innerHTML=`
            <h6>Success: ${hashiv.succses} </h6>
            <h6>Worning: ${hashiv.worning} </h6>
 
        `
        clearInterval(x)
        btn.style.display='none'
        answer.style.display='none'
        again.style.display='block'
        return
    }

    let arr=res.split('')
    arr=arr.sort(()=> 0.3-Math.random()).join('')
    minseconds=16
    text.innerHTML=arr

}
question()
timer()
function timer(){
     x=setInterval(()=>{
        if(minseconds===0){
            next()
            minseconds=16
        }
        seconds.innerHTML=minseconds
        minseconds--
    },100)
}

function tryagain(){
    f_index=0
    hashiv.succses=0
    hashiv.worning=0
    btn.style.display='block'
    answer.style.display='block'
    again.style.display='none'
    question()
    timer()
}
function next(){
   if(fruct[f_index].toLowerCase()===answer.value.toLowerCase()){
       hashiv.succses++
   }else{
       hashiv.worning++
   }
    answer.value=''
    f_index++
    question()
}

