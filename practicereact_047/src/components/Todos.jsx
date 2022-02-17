import {useSelector,useDispatch} from "react-redux"

import {addTodo, addTodoLoading,addTodoSuccess,getTodoLoading,getTodoSuccess} from "../redux/action"

import {useState,useEffect} from "react"

import axios from "axios"

export const Todos = (()=>{
    const [text,setText] = useState("")
    const {loading,error,data} = useSelector((store) => store.todos)
    const dispatch = useDispatch();

    useEffect(()=>{
        getTodos()
    },[])

    const getTodos = ()=>{
        dispatch(getTodoLoading());
        axios.get("http://localhost:3002/todos").then(({data})=>{
            dispatch(getTodoSuccess(data));
        })
    }

    return loading?"Loading....." : (
         <div> 
        <input type="text" placeholder="Enter todo task" onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <button onClick= {()=>{
            // dispatch(addTodo({
            //     id: Date.now(),
            //     title : text,
            //     status: false
            // }))
             dispatch(addTodoLoading());
            axios.post("http://localhost:3002/todos",{title: text, status: false}).then((data)=>{
                //dispatch(successful)
                dispatch(addTodoSuccess());
                // dispatch(addTodo(data))
                getTodos();
            }).catch((err)=>{
                //error state inititated
            })
        }}>ADD TODO</button>

        <div>
            {
                data.map((e,i)=>{
                    return <h3 key={e.id} >{e.title}</h3>
                })
            }
        </div>
    </div>)
})