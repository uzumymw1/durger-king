import React from 'react'
import Button from '../Button/Button';
import './Cart.css'
function Cart({cartItems,onCheckout}) {
  const totalPrice = cartItems.reduce((a,c) => a + c.price * c.quantity,0);
  

  return (

   
 
       <div className='cart__container'>


     <span className=''> 
     {cartItems.length === 0 ? "No items in cart":  `Total Price:  $${totalPrice.toFixed(2)}`}
     
      </span>

      <Button title = {`${cartItems.length === 0 ? "Order !" : "Checkout"} `} 
      type ={"checkout"}   disabled={cartItems.length === 0 ? true : false} onClick={onCheckout}
      />
   
    
    </div>
   

  )

}
export default Cart;