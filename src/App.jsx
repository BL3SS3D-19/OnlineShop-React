import {Header} from './components/Header.jsx'
import { products as initialProducts } from './mocks/productsv2.json';
import { Footer } from "./components/Footer.jsx"
import { CartProvider } from "./context/cart.jsx"
import {ProductProvider} from "./context/productContext.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home.jsx"
import {ProductsView} from "./components/ProductsView.jsx"






function App() { 
  console.log(initialProducts)
 
  

  return (
    <ProductProvider initialProducts={initialProducts}>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductsView/>} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ProductProvider>
  )
}

export default App
