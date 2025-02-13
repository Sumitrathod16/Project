import './Navbar.css';
import { TiShoppingCart } from "react-icons/ti";

function Navbar(){
    return (
        <div className="nav">
            <div className='nav-icon'>
            <TiShoppingCart />
            </div>
            <b>Shopio</b>
        </div>
    );
}

export default Navbar;