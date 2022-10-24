import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { spacing } from "../styles/index";
// Components
import Home from "../screens/Home";
import Add from "../screens/Add";

const Drawer = createDrawerNavigator();
const HomeStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Feather
              name="menu"
              color="black"
              size={24}
              style={spacing.drawer}
              onPress={navigation.toggleDrawer}
            />
          ),
          headerStyle: {
            backgroundColor: "transparent",
          },
        })}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="Add"
          component={Add}
          options={{ presentation: "modal" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
