import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'

export const ProductDetails = ()=>{
    const {id} = useParams();
    const [singleProduct,setSingleProduct] = useState({});


    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then(x=> x.json()).then((data)=> setSingleProduct(data))
    },[])

    return (
        <>
        <div>Welcome to ProductDetails Page</div>
         <h1>Title: {singleProduct.title} </h1>
         <h2>Price: {singleProduct.price} </h2>
         <h2>Category: {singleProduct.category} </h2>
         <img src={singleProduct.image} alt="image" />
        </>  
    )
}
