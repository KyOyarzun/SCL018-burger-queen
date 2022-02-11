import { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase";

const KitchenUpdate = ({id, mesa, estado, order}) => {
        const [status, setStatus] = useState({
          estado: "Preparing",
      });
      const changeStatus = () => {
          setStatus({
              ...status,
              estado:"Ready",
          })
        }
        const update = async (e) => {
            e.preventDefault();
            console.log('actualizando');
    
            try {
                await updateDoc(doc(db, 'orderToPrepare', id), {
                    estado: status,
                });
    
            } catch (error) {
                console.log(error);
            }
        }
        
        return (
            <form action="" onSubmit={update}>
            <div key={id}>
            <span>{mesa}</span>
            <span>{estado.estado}</span>
            {order.map((item, index)=> 
            <li key={index}>{item.name}</li>
            )}
            <button type='submit' onClick={changeStatus}>Pedido listo</button>
            </div>
            </form>
  )};

export default KitchenUpdate;
