import React from "react";
import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    price: 10.98,
    name: "Banana",
    description: "fresh banana from thailand",
  },
  {
    id: 2,
    price: 12.98,
    name: "Apple",
    description: "fresh apple from thailand",
  },
  {
    id: 3,
    price: 8,
    name: "Mango",
    description: "fresh mango from thailand",
  },
  {
    id: 4,
    price: 5.55,
    name: "Kiwi",
    description: "fresh kiwi from thailand",
  },
  {
    id: 5,
    price: 6.89,
    name: "Orangle",
    description: "fresh orangle from thailand",
  },
];

const Body = () => {
  return (
    <section className="body">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </section>
  );
};

export default Body;
