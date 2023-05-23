import React from "react";
import Summary from "../components/Summary";
import Nav from "../components/Nav";

const Header = (props) => {
  return (
    <section>
      <Nav showCartHandler={props.showCartHandler} />
      <Summary />
    </section>
  );
};

export default Header;
