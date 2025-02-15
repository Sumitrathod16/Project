import './Navbar.css';
import { TiShoppingCart } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc";
import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
    return (
        <div className="nav">
            <div className='nav-icon'>
                <TiShoppingCart />
            </div>
            <b>Shopio</b>
            <form className='search'>
            <input type='text' placeholder='Search Shopio..' id='search-box' />
            <BsSearch id='search-icon' />
            </form>
            
            <div className='login'>
                <a href="/login">Login</a><span></span>
                <a href="/SignUp">SignUp</a>
            </div>
            <div className='theme'>
                <VscColorMode />
            </div>
            <div className='cart-icon'>
                <FiShoppingBag />
            </div>
        </div>
    );
}

export default Navbar;