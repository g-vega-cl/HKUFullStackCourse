import React from 'react';
import Main from "./components/MainComponent";
import {  } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MenuNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Dishdetail: {screen: Dishdetail}
},{
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle:{
      backgroundColor: '#512DA88'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff'
    }
  }
})


function MyApp() {
  return (
    <Main/>
  );
}
const App = createAppContainer(MyApp);


export default App
