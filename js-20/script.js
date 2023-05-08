let answer=document.querySelector('#answer')
let again=document.querySelector('.again')
let btn=document.querySelector('.btn')
let text=document.querySelector('.text')
let fruct=["Emma",
    "Olivia",
    "Ava",
    "Isabella",
    "Sophia",
    "Charlotte",
    "Mia",
    "Amelia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Emily",
    "Elizabeth",
    "Mila",
    "Ella",
    "Avery",
    "Sofia",
    "Camila",
    "Aria",
    "Scarlett",
    "Victoria",
    "Madison",
    "Luna",
    "Grace",
    "Chloe",
    "Penelope",
    "Layla",
    "Riley",
    "Zoey",
    "Nora"]
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
        btn.style.display='none'
        answer.style.display='none'
        again.style.display='block'
        return
    }
    let arr=res.split('')
    arr=arr.sort(()=> 0.3-Math.random()).join('')

    text.innerHTML=arr
}
question()
function tryagain(){
    f_index=0
    hashiv.succses=0
    hashiv.worning=0
    btn.style.display='block'
    answer.style.display='block'
    again.style.display='none'
    question()
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

