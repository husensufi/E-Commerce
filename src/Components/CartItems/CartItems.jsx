import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"


const CartItems = () => {

    const { all_product, cartItems, removetoCart } = useContext(ShopContext);
  return (
      <div className='cartitems'>
          <div className="cartitems-formate-main">
              
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                  return <>
                      <div>
                          <div className="cartitemsformate cartitems-formate-main">
                              <img className='carticon-product' src={e.image} alt="" />
                              <p>{ e.name}</p>
                              <p>${e.new_price}</p>
                              <button className='cart-quantity'>{cartItems[e.id] }</button>
                              <p>${ e.new_price*cartItems[e.id]}</p>
                              <img className='cart-remove' src={remove_icon} onClick={() => { removetoCart(e.id) }} alt="" />
                          </div>
                          <hr />
                      </div></>
              }
              return null;
          })}
          <div className="cartitems-down">
              <div className="cartitems-total">
                  <h1>Cart Total</h1>
                  <div>
                      <div className="cart-total-items">
                          <p>Sub Total</p>
                          <p>${ 0}</p>
                      </div>
                      <hr />
                      <div className="cart-total-items">
                          <p>Shipping Fee</p>
                          <p>Free</p>
                          <p></p>
                      </div>
                      <hr />
                      <div className="cart-total-items">
                          <h3>Total</h3>
                          <h3>${ 0}</h3>
                      </div>

                  </div>
                  <button className='btn1'>proceed</button>
              </div>
          </div>
    </div>
  )
}

export default CartItems