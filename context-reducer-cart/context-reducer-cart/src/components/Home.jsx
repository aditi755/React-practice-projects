import React from 'react'
import { CartState } from "../context/Context"
import SingleProduct from './SingleProduct'
import Filters from './Filters.jsx'
import './styles.css'
const Home = () => {
  //   const { state: { products } }= CartState()  //Destructuring one level further, it will directly access the products inside the state object only console what has been destructred i,r products

  //   console.log(products)
  // return (
  //   <div className="home">
  //       <Filters />
  //       <div className="productContainer">
  //           {products.map((prod) => {
  //           return <span><SingleProduct prod={prod} id={prod.id}/></span>  //without return statement its not rendering on screen cuz its like rendering in App.jsx under return u render it
  //           })}
  //       </div>
  //   </div>
  // )

  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default Home