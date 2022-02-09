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
      console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
      changeTable('');
      context.clearCart();
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
                <li onClick={() => context.increase(product.id)}>+</li>
                <li onClick={() => context.removeCart(product.id)}>Eliminar</li> 
                <li onClick={() => context.decrease(product.id)}>-</li> 
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


/*background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;*/
