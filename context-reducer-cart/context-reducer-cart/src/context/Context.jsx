import {createContext, useContext, useReducer } from 'react'
import faker from "faker"
import { cartReducer, productReducer } from "./Reducers";


const Cart = createContext();  //THIS COMES OUT OF CONTEXT and Import
faker.seed(99)

 const Context = ({children}) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: 'https://images.unsplash.com/photo-1706554596177-35b0a05a082e?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }))
    console.log(products)

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,   //initialState here we hv object
        cart: []
    } )

    
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);


  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>   
        {/* //not using value={{products}} here, use useReducerhook to manage state*/}
        {children}
    </Cart.Provider>
  )
}

export default Context

//THIS WILL GET IMPORTED EVERYWHERE IN ORDER TO ACCESS THE STATE
export const CartState = () => {
    return useContext(Cart)   
}
