import React, { useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import {View} from 'react-native';
export default Main = (props) => {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };
  return (
      <View>
        <Menu dishes={dishes} onPress={(dishId) => onDishSelect(dishId)} />
        <DishDetail dish = {dishes.filter((dish) => dish.id === selectedDish)[0]}/>
    </View>
  );
};
