/* import logo from './logo.svg'; */
// import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import KitchenView from "./components/kitchen/KitchenView.jsx";
import menuJson from "./menu.json"; 
import {createContext, useState} from "react";
import View from "./components/waitress/View.jsx";
//import "@material-tailwind/react/tailwind.css"; // importa tailwind global supuestamente

export const DataContext = createContext();

function App() {
  const data = menuJson.food;
  console.log(data);
  const [addFood, changeAddFood] = useState({
    foodList: data, 
    cart: []
  })
  const addProduct = (product) => {
    return changeAddFood({
      ...addFood, 
      cart: addFood.cart.find((cartItem)=> cartItem.id === product.id) 
      ? addFood.cart.map((cartItem)=> cartItem.id === product.id 
      ? {...cartItem, count: cartItem.count + 1}
      : cartItem
      ) 
      : [...addFood.cart, {...product, count: 1}]

    })
  }

  const removeCart = (id) => {
    console.log(removeCart)
    changeAddFood({
      ...addFood,
      cart: addFood.cart.filter((item) => item.id !== id)
    })
  }

  const increase = (id) => {
    changeAddFood({
      ...addFood,
      cart: addFood.cart.map((item) => item.id === id
      ?
      {...item, count:item.count + 1}
      :
      item
    )
  })
  }

  const decrease = (id) => {
    changeAddFood({
      ...addFood,
      cart: addFood.cart.map((item) => item.id === id
      ?
      {...item, count:item.count > 1 ? item.count -1 : 1}
      :
      item
    )
  })
  }

  const clearCart = () => {
    changeAddFood({
      ...addFood, 
      cart: []
    })
  }

  const totalValue = {addFood:addFood, addProduct, data, removeCart, increase, decrease, clearCart}

  return (
  <DataContext.Provider value={totalValue}>
  <Router>
  <Routes>
  <Route path="" element={<Home />}/>
  <Route path="/waitress" element={<View />}/>
  <Route path="/kitchen" element={<KitchenView />}/>
  </Routes>
  </Router>
  </DataContext.Provider>
  );
}

export default App;
