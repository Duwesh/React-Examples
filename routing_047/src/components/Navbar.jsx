import {Link} from 'react-router-dom'
export const Navbar = ()=>{
    return (
        <div>
            <Link to="/">Home</Link> &nbsp; &nbsp;
            <Link to="/about">About</Link> &nbsp; &nbsp;
            <Link to="/contact">Contact</Link> &nbsp; &nbsp;
            <Link to="/users">UsersList</Link>
        </div>
    );
}