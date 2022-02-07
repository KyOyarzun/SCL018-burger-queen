import Cart from "./Cart";
import Order from "./Order";
import styled from "styled-components";


const View = () => {
    return (
        <>
            <Order/> 
            <Cart/> 
        </>
    )
}

export default View;

/* const Contenedor = styled.div`
     
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-content: space-around;
margin: auto;
padding-top: 20px;
background:  #cfcdcb;

      `;

      const Menu = styled.main`
      box-sizing: border-box;
      min-height: 1px;
      position: relative;
      padding-left: 15px;
      padding-right: 15px;
      flex: 0 0 62.5%;
      max-width: 62.5%;
      margin-left: 0%;
      right: auto;
      left: auto;
      
      
      
      
      
            `;
      

            const Carrito = styled.aside`
box-sizing: border-box;
min-height: 1px;
position: relative;
padding-left: 15px;
padding-right: 15px;
flex: 0 0 33.3333%;
max-width: 33.3333%;
margin-left: 0%;
right: auto;
left: auto;
width: auto;
height: auto;
background-color: #e0e0e0;
box-shadow: 0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
border-radius: 4px;
height: 50%;

      `;

 */