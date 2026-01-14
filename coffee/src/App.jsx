import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import ExploreCards from "./components/ExploreCards";
import PinkCoffee from "./assets/PinkCoffee.png";
import CoolBrew from "./assets/CoolBrew.png";
import GreenCoffee from "./assets/GreenCoffee.png";
import CupCakeCoffee from "./assets/CupCakeCoffee.png";
import "./App.css";
import LoginForm from "./components/LoginForm";

import { useState } from "react";

const App = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);

  const products = [
    {
      key: 1,
      img: PinkCoffee,
      color: "Pink Coffee",
      name: "Strawberry Delight",
      price: "$4.99",
    },
    {
      key: 2,
      img: CoolBrew,
      color: "Cool Brew",
      name: "Iced Coffee Bliss",
      price: "$3.99",
    },
    {
      key: 3,
      img: GreenCoffee,
      color: "Green Coffee",
      name: "Chilled Mocha Magic",
      price: "$4.49",
    },
    {
      key: 4,
      img: CupCakeCoffee,
      color: "Cupcake Coffee",
      name: "Vanilla Cupcake Latte",
      price: "$5.49",
    },
  ];

  return (
    <div>
      <Nav cartItemCount={cartItemCount} setLoginOpen={setLoginOpen} />

      <div className="max-md:pt-10 max-md:mt-5 md:pt-0 ">
        <Hero />
      </div>

      <Explore />

      <div className="flex overflow-x-auto sm:grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 space-x-5 px-16 py-10 max-sm:grid-cols-1 max-sm:px-8 bg-neutral-100 scrollbar-hide   ">
        {products.map((product, index) => (
          <div className="min-w-[250px] sm-w-0 ">
            <ExploreCards
              key={index}
              img={product.img}
              color={product.color}
              name={product.name}
              price={product.price}
              setCartItemCount={setCartItemCount}
            />
          </div>
        ))}
      </div>

      {loginOpen && <LoginForm setLoginOpen={setLoginOpen} />}
    </div>
  );
};

export default App;
