import {upadteCount} from "./InitialState.js";
import Counter from "./Counter.js";
import {decrement, increment} from "./CounectionVewe.js";
import {setUpadteData} from "./storge.js";

increment.addEventListener('click',function (){

   upadteCount("+") // count update add +1
    Counter() //print
    setUpadteData()


})
decrement.addEventListener('click',function (){

   upadteCount("-")
    Counter()
    setUpadteData()
})


