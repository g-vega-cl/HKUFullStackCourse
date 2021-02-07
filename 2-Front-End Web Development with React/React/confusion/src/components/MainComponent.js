import React, {useState} from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import {Menu} from "./MenuComponent";
import {DishDetail} from "../components/DishdetailComponent";
import {dishes} from "../shared/dishes";

export const Main = () => {
    const [selectedDishId, onDishSelectId] = useState(null);
    return (
        <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={dishes} onClick={(dishId) => onDishSelectId(dishId)} />
          <DishDetail dish={dishes.filter((dish) => dish.id === selectedDishId)[0]} />
        </div>
    );
}
