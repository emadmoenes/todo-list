import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function index() {
  return <Redirect href="/authenticate/login" />;
}

const styles = StyleSheet.create({});
