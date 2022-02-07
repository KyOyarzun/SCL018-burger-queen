import { useState, useContext } from "react";
import { DataContext } from "../../App.js" 

const Order = () => {
    const context = useContext(DataContext);
    const newData = context.data.filter((elem) => elem.type === "sandwiches");
    const newDrink = context.data.filter((elem) => elem.type === "drinks");
    const newPreps = context.data.filter((elem) => elem.type === "otherPrep");
    const [sesion , cambiarEstadoSesion] = useState([]);
    return (
    <>
    <div>
      <button onClick={() => cambiarEstadoSesion(newData)}>Sándwiches</button>
      <button onClick={() => cambiarEstadoSesion(newDrink)}>Bebestibles</button>
      <button onClick={() => cambiarEstadoSesion(newPreps)}>Otras preparaciones</button>
      {sesion.map((item, index)=>(
            <div key={index}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={() => context.addProduct(item)}>Agregar pedido</button>
            </div>
        ))}  
    </div> 
    </>
)
};

export default Order;
