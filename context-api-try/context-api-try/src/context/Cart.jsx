import React from 'react'
import { createContext, useState , useContext } from "react"

export const CartContext = createContext(null);
 
export function CartProvider({children}) {
  const [items, setItems] = useState([]);

  return (
   <CartContext.Provider value={{items, setItems }}>
       {children}
   </CartContext.Provider>
  )
}

