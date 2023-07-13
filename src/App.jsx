import React from "react"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from "/src/components/Navbar";
import Shop from "/src/pages/shop/Shop"
import Cart from "/src/pages/cart/Cart"
import { ShopContextProvider } from "/src/context/shop-context";


function App() {
  
  return (
    <>
    <ShopContextProvider>
    
      <Router>
<Navbar/>
        <Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
