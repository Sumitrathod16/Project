import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <p id='product-name'>{props.pname}</p>
            <p id='discount'>{props.discount}</p>
            <p id='product-price'>{props.pprice}
                <strike id="old-price">{props.oldp}</strike>
            </p>
            <button id='add-to-cart-btn'>Add to cart</button>
        </div>
    );
}

export default Card;