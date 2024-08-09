import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Layout() {
  return (
    //home tab
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="tasks" size={24} color="#7CB9E8" />
            ) : (
              <FontAwesome name="tasks" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="calender"
        options={{
          tabBarLabel: "calender",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="calendar" size={24} color="#7CB9E8" />
            ) : (
              <FontAwesome name="calendar" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "profile",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="account-circle" size={24} color="#7CB9E8" />
            ) : (
              <MaterialIcons name="account-circle" size={24} color="black" />
            ),
        }}
      />
    </Tabs>
  );
}
