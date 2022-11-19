import "react-native-gesture-handler"
import *as react from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import IssLocation from "./screens/isslocationscreen"
import Meteor from "./screens/meteorscreen"
import Home from "./screens/homescreen"

const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen
        name = "home"
        component={Home}
        />
        <Stack.Screen
        name = "isslocation"
        component={IssLocation}
        />
        <Stack.Screen
        name = "meteor"
        component={Meteor}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}