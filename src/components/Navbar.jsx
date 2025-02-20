import './Navbar.css';
import { TiShoppingCart } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc";
import { FiShoppingBag } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";

function Navbar({ searchQuery, onSearchChange, dark, setDark, sidecart, setsidecart, sidebar, setsidebar }) {
    return (
        <div className={`nav ${dark ? 'dark-theme' : ''}`}>
            <div className='nav-icon'>
                <TiShoppingCart />
            </div>
            <b>Shopio</b>
            <form className='search' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Search Shopio..' id='search-box' value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
                <BsSearch id='search-icon' />
            </form>

            <div className='login'>
                <a href="/login">Login</a>
                <a href="/SignUp">SignUp</a>
            </div>
            <div className='theme' onClick={() => { setDark(dark = !dark) }}>
                <VscColorMode />
            </div>
            <div className='cart-icon' onClick={() => { setsidecart(true) }}>
                <FiShoppingBag />
                <span>0</span>
            </div>
            <div className='siderbar' onClick={()=>{setsidebar(true)}}>
                <VscThreeBars id='sidebar-icon' />
            </div>
            <div className={`s ${sidecart ? 'cart-container' : ''}`}>
                <p className='incart-title'>Order items</p>
                <TfiClose className='cartbar-close' onClick={() => { setsidecart(false) }} />
            </div>
            <div className={`s ${sidebar ? 'cart-container' : ''}`}>
                <TfiClose className='cartbar-close' onClick={() => { setsidebar(false) }} />
            </div>
        </div>
    );
}

export default Navbar;