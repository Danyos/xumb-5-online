
export let count=0


export function upadteCount(res){
    if(res==="+"){
        count++
    }else {
        count--
    }

    return count
}
export function chageCount(res){
    count=res
}