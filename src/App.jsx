import { Products } from "./components/Products.jsx"
import {products as initialProducts} from "./mocks/productsv2.json"
import { useState } from "react"
import {Header} from './components/Header.jsx'
import { Footer } from "./components/Footer.jsx"
import { Cart } from "./components/Cart.jsx"
import { CartProvider } from "./context/cart.jsx"
import {ProductProvider} from "./context/productContext.jsx"
import { Banner } from "./components/Banner.jsx"
 //import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CardsContainer} from "./components/Cards.jsx"




function App() {
  
  const [products] = useState(initialProducts)

  
  
  return (
    <ProductProvider initialProducts={products} >
    <CartProvider>
      <Header />
      <Banner/>
      <Cart/>
      <Products />
      <CardsContainer />
      <Footer />
    </CartProvider>
    </ProductProvider>
  )
}

export default App
