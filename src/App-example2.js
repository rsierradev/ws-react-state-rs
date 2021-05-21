import React, { useState } from "react";
import CartItem from "./components/useState-example2/CartItem";
function App() {
  const [itemCounter, setitemCounter] = useState(0);
  // const [oranges, setOranges] = useState(0);

  function addHandleClick(e) {
    e.preventDefault();
    console.log(e);
    setitemCounter(itemCounter + 1);
  }

  function minHandleClick(e) {
    e.preventDefault();
    console.log(e);
    if (itemCounter) {
      setitemCounter(itemCounter - 1);
    }
  }
  return (
    <div>
      <CartItem
        itemName="Apple"
        itemCounter={itemCounter}
        addHandleClick={addHandleClick}
        minHandleClick={minHandleClick}
      />
      {/* <CartItem
        product="oranges"
        quantity={oranges}
        add={() => {
          setOranges(oranges + 1);
        }}
        remove={() => {
          if (oranges >= 1) {
            setOranges(oranges - 1);
          }
        }}
      /> */}
    </div>
  );
}

export default App;

// const products = [
//   {
//     sku: 123123123121234,
//     product: "oranges",
//     price: 23,
//   },
//   {
//     sku: 12312312312341312,
//     product: "apples",
//     price: 2,
//   },
//   {
//     sku: 1231231231343334,
//     product: "bananas",
//     price: 5,
//   },
// ];

// const [cart, setCart] = useState({})

// function addToCart(sku){
//   const newCart = {...cart}
//   if(sku in newCart) newCart[sku] +=1
//   else newCart[sku] = 1
//   setCart(newCart)
// }

// function removeCartItem(sku){
//   const newCart = {...cart}
//   if(sku in newCart){
//     newCart[sku] -= 1
//     if(newCart[sku] < 1) delete newCart[sku]
//   }
//   setCart(newCart)
// }

// {"1233": 2, "2312312":4}

// return(
//   <div>
//     {Object.keys(cart).map(sku => {
//       <div>
//       <div>{sku} {cart[sku]}</div>
//       <button onClick={() => removeCartItem(sku)}>-</button>
//       </div>
//     })}
//   </div>
// )
