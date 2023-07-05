function User(username,password,age,mail,country){
    this.id=username + new Date().getTime()
    this.username=username
    this.password=password
    this.age=age
    this.mail=mail
    this.country=country

}


function AuthManger(){
    this.users=[]
}
AuthManger.prototype.loadUser=function (){
    let userdata=localStorage['users']
    if(userdata){
        this.users=JSON.parse(userdata)
    }
}
AuthManger.prototype.saveUser=function (){
    localStorage['users']=JSON.stringify(this.users)
}
AuthManger.prototype.register=function (username,password,age,mail,country){
    let newUser=new User(username,password,age,mail,country)
    this.users.push(newUser)
    authmanger.saveUser()
}
AuthManger.prototype.login=function (username,password){
    return this.users.find(res=>res.username===username && res.password===password)
}
let authmanger=new AuthManger()
authmanger.loadUser()

authmanger.register("Pavel","141414",'24','Pavel@mail.ru','Armenia')

console.log(authmanger.login("Srbuhi","142434"))
console.log(authmanger.login("Astxik","141516"))
console.log(authmanger.login("Meruj","141414"))

//
// let user1=new User("daniel",'123456')
// console.log(user1)
