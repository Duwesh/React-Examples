import {useState,useEffect} from "react";

export const ListInput = ({toStoreData})=>{
    const [oneText,setOneText] = useState("");

 
    return (<div>
        <input onChange={(e)=>{
            setOneText(e.target.value); 
             }
        } type="text" placeholder="Enter the Grocery" />
        <button onClick={()=> {toStoreData(oneText)}} >Add to List</button>
        
        </div>)
}