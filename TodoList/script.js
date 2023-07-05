let loading_Storage=0
if(localStorage['loading']){
    loading_Storage=1
}
let userinfo=[]
function indexView(){
    viewPrint()
}
function viewPrint(){
    UserInformateApi().then(res=>{
        makeHtml(res)
    })
}
async function UserInformateApi(){
    try {
        const userData=await fetch('https://jsonplaceholder.typicode.com/users')
        const userInfo=await userData.json()

        return  userInfo
    }catch (e) {
        console.log("error")
    }



}
function makeHtml(data){
    userinfo.push(...data)
    let userTbody=document.querySelector('#userTbody')
    userTbody.innerHTML=''
    userinfo.forEach(res=>{
        userTbody.innerHTML+=`
        <tr class="tr-${res.id}">
            <th scope="row">${res.id}</th>
            <td>${res.name}</td>
            <td>${res.email}</td>
            <td>${res.phone}</td>
            <td>
                <button class="btn btn-success" data-toggle="modal" data-target="#EditModalLong" onclick="ItemId(${res.id},'edit')"><i class="fa fa-edit "></i></button>
                <button class="btn btn-danger" data-toggle="modal" data-target="#DeleteModalLong" onclick="ItemId(${res.id},'delete')"><i class="fa fa-trash "></i></button>
            </td>
        </tr>`
    })
    loading()
}


function loading(){
    let black_loading=document.querySelector('.black-loading')
    if(loading_Storage){
    black_loading.remove()
}else{
    setTimeout(function (){
        black_loading.remove()
    },1500)
    loading_Storage=1
    localStorage['loading']=loading_Storage
}


}

let ItemIdData=null
function ItemId(id,type){
    ItemIdData=id
    if(type==='edit'){
        editeitem()
    }
}
function editeitem(){
    let data=userinfo.find(res=>res.id===ItemIdData)

    let exampleInputEmail1=document.querySelector('#exampleInputEmail1')
   exampleInputEmail1.value=data.email

    console.log(ItemIdData)
}
function deleteItem(){

    let tr_row=document.querySelector('.tr-'+ItemIdData).remove()


}
function updateInfo(){
    return makeHtml(userinfo.map(res=>{
        if(res.id===ItemIdData){
            res.email="Muxi@mail.ru"
        }
        return  res
    }))

}