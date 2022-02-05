import {ListInput} from './listinput'
import {useState,useEffect} from "react"
import {ListShow} from './listshow'
import {v4 as uuid} from "uuid"
import './list.css'

export const List = ()=>{
    const [data,setData] = useState([]);
    const ToStoreData = (text)=>{
        let dataNew ={
            title : text,
            qty: 1,
            id: uuid(),
            status: true,
        }
        setData([...data,dataNew]);
    }

    const deleteItem = (id)=>{
        let x = data.filter(function(e){
            if(e.id !== id){
                return e
            }
        });
        setData(x);
    }

    const updateItem = (id)=>{
        let x = data.filter(function(e){
            if(e.id === id){
                e.status = false
            }
            return e
        });
        setData(x); 
    }

    return (<div>
        < ListInput toStoreData= {ToStoreData}/>
        <h2>List of Entered Items</h2>
        {data.map((e)=>{
          return (<ListShow  key={e.id} title={e.title} qty={e.qty} status={e.status} deleteItem={deleteItem} updateItem={updateItem} id={e.id}/>);
        })}

    </div>)
}