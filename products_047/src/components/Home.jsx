import {useState,useEffect} from "react";
import {Link} from 'react-router-dom'

export const Home = ()=>{
    const [cat,setCat] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories').then(x=> x.json()).then((data)=> setCat(data))
    },[])


    return (
        <div>
            <h1> Welcome to home Page </h1>
            {
                cat.map((e,i)=>{
                    return (
                        <p key={i}>
                         Product category {i+1} - <Link to={`/products/category/${e}`}>{e}</Link>  
                        </p>
                       
                    )
                })
            }
        </div>
    )
}


