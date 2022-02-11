import {useState, useEffect} from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
/* import styled from "styled-components"; */
import db from "../../firebase";
import KitchenUpdate from "./KitchenUpdate";

const KitchenOrder = () => {
    const [comanda, changeComanda] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "orderToPrepare"));
            onSnapshot(q, (snapshot) => {
              const array = snapshot.docs.map((documento) => {
                  return {...documento.data(), id:documento.id}
              })
              changeComanda(array);
              console.log(changeComanda);
            },
            (error) => {
            console.log('error');
            });        
    }, []);

    const clearReady = [...comanda];
    const clearPrep = clearReady.filter((elem) => {return elem.estado === "Preparing"});

    return (
        <div>
        {clearPrep.map((item, index) => (
            <KitchenUpdate
            key={index}
            id={item.id}
            mesa={item.mesa}
            estado={item.estado}
            order={item.order}
            />
        ))}
        </div>
        )
}
 
export default KitchenOrder;