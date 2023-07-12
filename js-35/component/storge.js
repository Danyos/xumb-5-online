import {chageCount, count} from "./InitialState.js";
export function getUpdateStorage(){
    if(localStorage['count']){
        chageCount(localStorage['count'])
    }
}
getUpdateStorage()
export function setUpadteData(){
    localStorage['count']=count
}
