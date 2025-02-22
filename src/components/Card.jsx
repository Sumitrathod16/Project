import { useContext } from 'react';
import './Card.css';
import { datacontext } from '../context/UserContext';

function Card(props) {
    let {cnt,setcnt,setadded,setclicked,setimage,setprice} = useContext(datacontext);
    let count = ()=>{
        setcnt(cnt+1);
    }

    return (
        <div className="card">
            <img src={props.img} alt="" />
            <p id='product-name'>{props.pname}</p>
            <p id='discount'>{props.discount}</p>
            <p id='product-price'>{props.pprice}
                <strike id="old-price">{props.oldp}</strike>
            </p>
            <button id='add-to-cart-btn' onClick={()=>{setadded(true); count(); setclicked(true); setimage(props.img); setprice(props.pprice);}}>Add to cart</button>
        </div>
    );
}

export default Card;