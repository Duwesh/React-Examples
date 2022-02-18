import {useSelector,useDispatch} from "react-redux"

import {incCount,decCount} from "../redux/Counter-redux/action"

export const Counter = ()=>{
    const count = useSelector((store) => store.counter.count)
    const dispatch = useDispatch();
     return (
         <div>
            <h1>Counter : {count}</h1>

            <button onClick= {()=>{ 
                dispatch(incCount(1))
            }} >Increase By 1</button> &nbsp; &nbsp;
  
            <button onClick= {()=>{ 
                dispatch(decCount(1))
            }}>Decrease By 1</button>
         </div>
     )
}