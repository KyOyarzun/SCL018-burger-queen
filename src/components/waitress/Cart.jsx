import { useContext } from "react";
import { DataContext } from "../../App.js" 


const Cart = () => {
    const context = useContext(DataContext);
    const cartItem = context.addFood.cart;
    return (
        <div>
            {cartItem.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Cart;