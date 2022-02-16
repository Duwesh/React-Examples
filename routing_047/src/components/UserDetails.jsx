import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'

export const UserDetails = ()=>{
    const {id} = useParams();
    const [singleUser,setSingleUser] = useState({});


    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`).then(x=> x.json()).then(({data})=> setSingleUser(data))
    },[])

    return (
        <>
        <div>Welcome to UserDetails Page</div>
         <h1>First name: {singleUser.first_name} </h1>
         <h2>Email: {singleUser.email} </h2>
         <img src={singleUser.avatar} alt="image" />
        </>  
    )
}
