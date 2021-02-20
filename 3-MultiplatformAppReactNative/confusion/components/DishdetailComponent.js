import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

const RenderDish = ({ dish }) => {
  const dish = { dish };

  if (dish != null) {
    return <Card featuredTitle={dish.name} image={require("./images/uthapizza.png")}>
        <Text style = {{margin:10}}>
            {dish.description}
        </Text>
    </Card>;
  } else {
    return <View />;
  }
};


export default DishDetail =({dish}) =>{
    return(<RenderDish dish = {dish}/>)
}