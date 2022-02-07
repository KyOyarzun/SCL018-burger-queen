import { useState } from "react/cjs/react.development";
import menuJson from "../../menu.json";

const Order = () => {
    const data = menuJson.food;
    const newData = data.filter((elem) => elem.type === "sandwiches");
    const newDrink = data.filter((elem) => elem.type === "drinks");
    const newPreps = data.filter((elem) => elem.type === "otherPrep");
    const [sesion , cambiarEstadoSesion] = useState(true);
    return (
    <>
    {sesion === true 
    ?
    <div>
      <button onClick={() => cambiarEstadoSesion(newData)}>Sándwiches</button>
      <button onClick={() => cambiarEstadoSesion(newDrink)}>Bebestibles</button>
      <button onClick={() => cambiarEstadoSesion(newPreps)}>Otras preparaciones</button>
      {sesion.map((comida, index)=>(
            <div key={index}>
                <p>{comida.id}</p>
                <p>{comida.name}</p>
                <p>{comida.price}</p>
                <button>Agregar pedido</button>
            </div>
        ))}  
    </div> 
    :
    <p>poando</p>
    }
    </>
)
};

export default Order;