import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

export const Users = ()=>{
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://reqres.in/api/users').then(x=> x.json()).then(({data})=> setUsers(data))
    },[])
    return (
        <div>
            <h1> Welcome to Users Page </h1>
            {
                users.map((e,i)=>{
                    return (
                        <p key={i}>
                         User {e.id} - <Link to={`/users/${e.id}`}>{e.first_name}</Link>  
                        </p>
                       
                    )
                })
            }
        </div>
    )
}