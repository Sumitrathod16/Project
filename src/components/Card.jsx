import './Card.css';

function Card(props){
    return (
        <div className="card">
            <img src={props.img} alt=""/>
            <p id='product-name'>{props.pname}</p>
            <p id='product-price'>{props.pprice}</p>
            <button id='add-to-cart-btn'>Add to cart</button>
        </div>
    );
}

export default Card;