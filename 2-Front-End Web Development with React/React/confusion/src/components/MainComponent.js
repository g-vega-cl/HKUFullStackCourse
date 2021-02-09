import React, { useState } from "react";
import { Home } from "./HomeComponent";
import { Menu } from "./MenuComponent";
import Contact from "./ContactComponent";
import { DishDetail } from "../components/DishdetailComponent";
import { Header } from "./HeaderComponent";
import { Footer } from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Switch, Route, Redirect } from "react-router-dom";

export const Main = () => {

  const [dishes, setDishes] = useState(DISHES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);

  const HomePage = () => {
    return (
      <Home 
      dish={dishes.filter((dish)=>dish.featured)[0]}
      promotion={promotions.filter((promotion)=>promotion.featured)[0]}
      leader={leaders.filter((leader)=>leader.featured)[0]}
      />

    
    );
  };
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={DISHES} />} />
        <Route exact path = "/contactus" component = {Contact} />
        <Redirect to="/home"></Redirect>
      </Switch>

      <Footer />
    </div>
  );
};
