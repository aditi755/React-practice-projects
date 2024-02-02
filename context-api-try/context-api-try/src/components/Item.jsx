import React from 'react'
import {CartContext} from '../context/Cart'
import { useState, useContext } from "react"

function Item(props) {
  const cart = useContext(CartContext)
  console.log("Cart", cart);

  return (
    <div className="item-card">
       <h4>{props.name}</h4>
       <p>Price: ${props.price}</p>
       <button onClick={() => cart.setItems([...cart.items, {
        name: props.name, price: props.price
       },]) }>Add to cart</button>
    </div>
  )
}

export default Item