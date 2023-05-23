import CartItem from "./CartItem";
import { useContext } from "react";
import { itemContext } from "../store/itemContext";

const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContext);
  return (
    <section className="cart-box">
      <h2>Your cart items are here</h2>
      {items.length < 1 ? (
        <h1 className="no-item">No items in your cart !!</h1>
      ) : (
        <>
          {items.map((fruit) => (
            <CartItem key={fruit.id} fruit={fruit} />
          ))}
        </>
      )}

      <hr />
      <div className="total">
        <h3>Total price</h3>
        <p>${totalAmount}</p>
      </div>
      <div className="btns">
        <button className="close-btn" onClick={props.hideCartHandler}>
          Close
        </button>
        {items.length < 1 ? (
          <></>
        ) : (
          <button className="order-btn">Order</button>
        )}
      </div>
    </section>
  );
};

export default Cart;
