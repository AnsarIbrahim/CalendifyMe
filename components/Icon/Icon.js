import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Icon = () => {
  return (
    <View style={{ flexDirection: "column", marginRight: 5 }}>
      <View
        style={{
          width: 12,
          height: 1.5,
          backgroundColor: "#000000bf",
          marginBottom: 4,
        }}
      />
      <View
        style={{
          width: 14,
          height: 1.5,
          backgroundColor: "#0000007f",
          marginBottom: 4,
        }}
      />
      <View style={{ width: 7, height: 1.5, backgroundColor: "#000000bf" }} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
