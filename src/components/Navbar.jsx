import './Navbar.css';
import { TiShoppingCart } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc";
import { FiShoppingBag } from "react-icons/fi";

function Navbar({ searchQuery, onSearchChange}) {
    return (
        <div className="nav">
            <div className='nav-icon'>
                <TiShoppingCart />
            </div>
            <b>Shopio</b>
            <form className='search' onSubmit={(e)=>e.preventDefault()}>
            {/* <BsSearch id='search-icon'/> */}
                <input type='text' placeholder='Search Shopio..' id='search-box' value={searchQuery} onChange={(e)=>onSearchChange(e.target.value)}/>
                <BsSearch id='search-icon'/>
            </form>

            <div className='login'>
                <a href="/login">Login</a>
                <a href="/SignUp">SignUp</a>
            </div>
            <div className='theme'>
                <VscColorMode />
            </div>
            <div className='cart-icon'>
                <FiShoppingBag />
                <span>0</span>
            </div>
        </div>
    );
}

export default Navbar;