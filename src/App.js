/* import logo from './logo.svg'; */
// import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import KitchenView from "./components/kitchen/KitchenView.jsx";
import menuJson from "./menu.json"; 
import {createContext, useState} from "react";
import View from "./components/waitress/View.jsx";

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
  const totalValue = {addFood:addFood, addProduct, data}

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
