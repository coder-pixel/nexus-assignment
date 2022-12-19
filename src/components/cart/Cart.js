import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Product from "../product/Product";
import "./cart.css"

const Cart = () => {
  const { products, gstAmount, totalAmount, totalItems } = useContext(CartContext);

  return (
    <div className="cart">
      <div className='cart-items-container'>
        {products.length > 0 ? products.map(product => <Product product={product} />) : (<div className='msg'>"Nothing to show!"</div>)}
      </div>

      <div className="cart-total">
        <h4 className="totalText">Total Qty: <span>{totalItems}</span></h4>
        <div className="total">
          <h4>Total: ₹{totalAmount}</h4>
          <h4>GST: ₹{gstAmount}</h4>
          <h4>Total: ₹{totalAmount !== 0 ? totalAmount + gstAmount : 0}</h4>
        </div>
      </div>
    </div>
  )
}

export default Cart