import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import { Provider } from "react-redux";
import { EventListScreen } from "./screens/EventListScreen";
import { EventScreen } from "./screens/EventScreen";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EventList" component={EventListScreen} />
          <Stack.Screen name="Event" component={EventScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}