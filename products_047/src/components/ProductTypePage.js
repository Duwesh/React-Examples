import {useEffect,useState} from 'react';
import {Link,useParams} from 'react-router-dom'


export const ProductTypePage = ()=>{
    const {types} = useParams();
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${types}`).then(x=> x.json()).then((data)=> {
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