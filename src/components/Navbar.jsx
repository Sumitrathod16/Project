import './Navbar.css';
import { TiShoppingCart } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";

function Navbar(){
    return (
        <div className="nav">
            <div className='nav-icon'>
            <TiShoppingCart />
            </div>
            <b>Shopio</b>
            <input type='text' placeholder='Search Shopio..' id='search-box' />
            <div className="search-icon">
            <BsSearch />
            </div>
            <div className='login'>
            <a href="/login">Login</a><span></span>
            <a href="/SignUp">SignUp</a>
            </div>
        </div>
    );
}

export default Navbar;