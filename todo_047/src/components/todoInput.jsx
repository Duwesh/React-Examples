import {useState,useEffect} from "react";

export const ToDoInput = ({setDatafunc})=>{
   const [text,setText] = useState("")
    return (
        <div>
            <input  className="todoinput" type="text" placeholder="Enter what to DO....." onChange={
                (e)=>{
                    setText(e.target.value);
                }
            }/>
            <button className="btn" onClick={()=>{
                        setDatafunc(text)
            } }>ADD</button>
        </div>
    );
}