import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default Menu = ({dishes}) =>{
    
    const renderMenuItem = ({item,index, onPress}) => {
        return <ListItem
            key = {index}
            title = {item.name}
            subtitle = {item.description}
            hideChevron = {true}
            onPress = {() => onPress(item.id)}
            leftAvatar = {{source: require("./images/uthapizza.png")}}
        />
    }

    return(
        <FlatList
        data = {dishes}
        renderItem = {renderMenuItem}
        keyExtractor = {item => item.id.toString()}
        />
    )
    
}