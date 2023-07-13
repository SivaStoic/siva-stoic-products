import React, { useContext } from 'react' 
import {PRODUCTS} from '/src/products'
import {ShopContext} from "/src/context/shop-context"
import CartItem from './cart-item'
import "/src/pages/cart/cart.css"
import { useNavigate } from 'react-router-dom'


const Cart = () => {
 const {cartItems,getTotalCartAmount} = useContext(ShopContext)

const totalAmount = getTotalCartAmount()

const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !==0){
            return <CartItem data={product} />
          }

        } 
      
        )}
      </div> 

      {totalAmount > 0 ? (
      <div className='checkout'>
<p><b>Subtotal: Rs {totalAmount}</b>  </p>
<button onClick={()=>navigate("/")}>Continue shopping</button>
<button>Checkout</button>
      </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}

    </div>
  )
}

export default Cart 


 