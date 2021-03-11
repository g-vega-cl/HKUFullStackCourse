import React, {useState} from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default Menu = ({dishes, navigation}) =>{
    navigationOptions = {
        title: 'Menu'
    }

    const {navigate} = navigation;

    const renderMenuItem = ({item,index, onPress}) => {
        return <ListItem
            key = {index}
            title = {item.name}
            subtitle = {item.description}
            hideChevron = {true}
            onPress = {() => navigate('Dishdetail', {dishId: item.id})}
            leftAvatar = {{source: require("./images/uthappizza.png")}}
        />
    }

            {/* <Menu dishes={dishes} onPress={(dishId) => onDishSelect(dishId)} />
        <DishDetail dish = {dishes.filter((dish) => dish.id === selectedDish)[0]}/> */}

    return(
        <FlatList
        data = {dishes}
        renderItem = {renderMenuItem}
        keyExtractor = {item => item.id.toString()}
        />
    )
    
}