import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReorderScreen from "./src/screen/ReorderScreen";
import CartScreen from "./src/screen/CardScreen";
import AccountScreen from "./src/screen/AccountScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#E96E6E",
        }}
      >
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="REORDER"
          component={ReorderScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="reorder" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="CART"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
