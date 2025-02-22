import { useContext } from "react";
import { datacontext } from "../context/UserContext";

function Card() {
    let { image,price } = useContext(datacontext);

    return (
        <div>
            {image ? <img src={image} height={50} width={50}/> : null}
        </div>
    );
}

export default Card;