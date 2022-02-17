import {Link} from 'react-router-dom'
export const Navbar = ()=>{
    return (
        <> 
        <br />
        <br />
        <div>
            <h1> <Link to="/">Home</Link> &nbsp; &nbsp; <Link to="/products">ProductsList</Link>  </h1>       
        </div>
        </>
       
    );
}