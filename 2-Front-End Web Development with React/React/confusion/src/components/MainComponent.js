import React, { useState } from "react";
import { Home } from "./HomeComponent";
import { Menu } from "./MenuComponent";
import { DishDetail } from "../components/DishdetailComponent";
import { Header } from "./HeaderComponent";
import { Footer } from "./FooterComponent";
import { dishes } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

export const Main = () => {
  const HomePage = () => {
    return <Home />;
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Redirect to="/home"></Redirect>
      </Switch>

      <Footer />
    </div>
  );
};
