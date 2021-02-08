import React, { useState } from "react";
import { Menu } from "./MenuComponent";
import { DishDetail } from "../components/DishdetailComponent";
import { Header } from "./HeaderComponent";
import { Footer } from "./FooterComponent";
import { dishes } from "../shared/dishes";

export const Main = () => {
  const [selectedDishId, onDishSelectId] = useState(null);
  return (
    <div>
      <Header />
      <Menu dishes={dishes} onClick={(dishId) => onDishSelectId(dishId)} />
      <DishDetail
        dish={dishes.filter((dish) => dish.id === selectedDishId)[0]}
      />
      <Footer/>
    </div>
  );
};
