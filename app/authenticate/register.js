import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Zocial from "@expo/vector-icons/Zocial";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";

const register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const navigateToPage = () => {
    router.replace("./login");
  };
  const handleRegister = () => {
    const user = {
      username: username,
      email: email,
      password: password,
    };

    axios
      .post("http://192.168.1.14:8081/register", user)
      .then((response) => {
        Alert.alert("Registerded successfull", "You have been registered");
        setEmail("");
        setPassword("");
        setUsername("");
      })
      .catch((error) => {
        Alert.alert("Registeration failed", "an error occured");
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 100 }}>
        <Text style={{ fontSize: 30, fontWeight: "700", color: "#0066b2" }}>
          TODO-LIST
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "600", marginTop: 20 }}>
            Register to app
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 10,
              marginTop: 30,
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, color: "gray" }}
              name="user"
              size={24}
              color="gray"
            />
            <TextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="enter your username"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: username ? 17 : 15,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 10,
              marginTop: 30,
            }}
          >
            <Zocial
              style={{ marginLeft: 10, color: "gray" }}
              name="email"
              size={18}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 15,
              }}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 5,
                borderRadius: 10,
                marginTop: 30,
              }}
            >
              <Fontisto
                style={{ marginLeft: 10, color: "gray" }}
                name="locked"
                size={18}
                color="gray"
              />
              <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                placeholder="enter your password"
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 17 : 15,
                }}
              />
            </View>
          </View>

          <View style={{ marginTop: 60 }} />
          <Pressable
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "#6699CC",
              padding: 15,
              borderRadius: 15,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Register
            </Text>
          </Pressable>
          <Pressable style={{ marginTop: 15 }} onPress={navigateToPage}>
            <Text style={{ color: "gray", textAlign: "center" }}>
              Already have an account? Login
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
