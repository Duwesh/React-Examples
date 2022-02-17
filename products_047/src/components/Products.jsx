import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

export const Products = ()=>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(x=> x.json()).then((data)=> {
            setProducts(data)    
        });
        
    },[])
   
    return (
        <div>
            <h3> Welcome to Products Page </h3>
            {
                products.map((e,i)=>{
                    return (
                        <p key={i}>
                         Product {e.id} - <Link to={`/products/${e.id}`}>{e.title}</Link>  
                        </p>
                       
                    )
                })
            }
        </div>
    )
}