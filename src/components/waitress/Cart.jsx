import { useContext, useState } from "react";
import { DataContext } from "../../App.js";
import db from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import styled from "styled-components";



/* import { Link } from "react-router-dom";
 */

const Cart = () => {
    const context = useContext(DataContext);
    const cartItem = context.addFood.cart;

    //Agregado hoy
    const totalCart = cartItem.reduce((total, product) =>
    (total = total + product.price * product.count), 0);

    //Agregado 09-02-2022
    const exactDate = () => {
        const today = new Date();
        const actualDate = `${today.getDate()} - ${(today.getMonth() + 1)} - ${today.getFullYear()}`;
        const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const dateAndHour = `Fecha: ${actualDate} - Hora: ${hour}`;
        return dateAndHour;
      };

    const [table, changeTable] = useState('');
 // why addData
    const addData = async (e) => {
        e.preventDefault();
        try {
          const docRef = await addDoc(collection(db, 'orderToPrepare'), {
            mesa: table,
            total: totalCart,
            time: exactDate(),
            order: cartItem,
            estado: 'Preparing',
    
          });
        } catch (e) {
          console.error();
        }
        changeTable('');
        context.removeAll();
      };




      //Agregado hoy

    return (
        <>
        {/* //Agregado */}
        <Form onSubmit={(e) => addData(e)}>
        <label>Mesa:</label>
        <input
        type="number"
        name="table"
        value={table}
        onChange={(e) => changeTable(e.target.value)}
        min="1" max="6"
        placeholder="1-6"
        />
        <h1>Pedido</h1>
        {cartItem.map((product, index) => (
            <div key={index}>
                <span>{product.count} {product.name}</span>
                <p>${(product.price * product.count)}</p>
                <button onClick={() => context.increase(product.id)}>+</button>
                <button onClick={() => context.removeCart(product.id)}>Eliminar</button> 
                <button onClick={() => context.decrease(product.id)}>-</button> 
            </div>
        ))}
            <div>
            <h1>Total:${totalCart}</h1>
            <button type="submit">
                Enviar a la cocina
            </button>    
            </div>
        {/* //Agregado */}
{/*         <div>
            {cartItem.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div> */}
        </Form>
        </>
    );
};

export default Cart;

const Form = styled.form`
height: 60vh;
`;