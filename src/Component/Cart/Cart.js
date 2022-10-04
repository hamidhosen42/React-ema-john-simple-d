import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = (total * 0.1).toFixed(2); //10%
  const gradTotal = total + shipping + parseFloat(tax);

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      {/* <p>Selected Items:{cart.length}</p> */}
      <p>Selected Items:{quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total:${gradTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;