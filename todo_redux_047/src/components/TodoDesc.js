import {useParams} from 'react-router-dom'

import {useState,useEffect} from "react"

import axios from "axios"

export const TodoDesc = ()=>{
    const {id} = useParams();

    const [desc,setDesc] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3003/todos/${id}`).then(({data})=>{
            setDesc(data);
        })
    },[])
    return (
        <>
        <div>Details About the task</div>
         <h3>Title:{desc.title}</h3>
         <p>What to Do: {desc.description}</p>
        </>
    )
}