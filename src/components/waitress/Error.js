import menuJson from "../../menu.json";
import { useState } from "react";
/* import Sandwiches from "./sandwiches"; */
/* import Sandwiches from "./Sandwiches.jsx"; */

const Order = () => {
  const data = menuJson.food;
  const dataFood = data.filter((elem) => elem.type === "sandwiches");
 const [menu, setmenu] = useState(dataFood);

console.log(dataFood)
console.log(menu)
console.log(setmenu)
  /*     const filterMenu = (category) => {
        setmenu(filterFood[category]); 
    }     */

  const productItem = (option) => {

    switch (option) {
      case "sandwiches":
        const bread = data.filter((elem) => elem.type === "option");
        setmenu(menu => [{...menu, bread}]);
        console.log(setmenu(bread))
        break;
      case "drinks":
        const beverages = data.filter((elem) => elem.type === "option");
        setmenu(beverages);
        break;
      case "otherPrep":
        const preps = data.filter((elem) => elem.type === "option");
        setmenu(preps);
        break;
        default:
            break;

    }
  };
  return (
    <div>
    <section>
      <button onClick={() => productItem("sandwiches")}>Sándwiches</button>
      <button onClick={() => productItem("drinks")}>Bebestibles</button>
      <button onClick={() => productItem("otherPrep")}>Otras preparaciones</button>
    </section>
    {menu.map((comida, index)=>(
        <div key={index}>
            <span>{comida.id}</span>
            <span>{comida.name}</span>
            <span>{comida.price}</span>
        </div>
    ))}
    </div>
  );
};

export default Order;
