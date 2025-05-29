import React,{useState} from 'react'

export const ProductCarts = ({ prodname, price }) => {
    const [quantity, setQuantity] = useState(0);

    const handleCart = () => {
        setQuantity(quantity + 1);
    };
    return (
        <div>
            <h5>{prodname}</h5>
            <h5>Price: ₹{price}</h5>
            <h5>Quantity: {quantity}</h5>
            <button onClick={handleCart}>Add to cart</button>
            <p>Total Price: ₹{quantity * price}</p>
        </div>
    )
}
