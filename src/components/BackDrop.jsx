import React from "react";
import Cart from "./Cart";

const BackDrop = (props) => {
  return (
    <>
      {props.showCart && (
        <section className="backdrop" onClick={props.hideCartHandler}>
          <Cart hideCartHandler={props.hideCartHandler} />
        </section>
      )}
    </>
  );
};

export default BackDrop;
