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
            <div className="card col-md-4" key={index}>
                <div className="card-body">
                    <p className="card-title">{item.name}</p>
                    <p className="card-subtitle mb-2 text-muted">{item.description}</p>
                    <p className="card-text">{item.price}</p>
                    <button className="btn btn-info" onClick={() => context.addProduct(item)}>Agregar al pedido</button>
                </div>
            </div>
        ))}  
    </div> 
    </>
)
};

export default Order;
