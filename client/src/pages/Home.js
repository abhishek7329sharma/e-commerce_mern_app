import React from 'react'
import ProductList from '../features/product-list/productList'
import Navbar from '../features/navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

export default Home