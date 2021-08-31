import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Counter = () => {
  return (
    <View style={styles.outerContainer}>
      <Text>0</Text>
      <View style={styles.rowContainer}>
        <Button style={styles.buttonStyle}>ADD</Button>
        <Button style={styles.buttonStyle}>SUBTRACT</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  rowContainer: {
    marginTop: 20,
    padding: 10,
    flexdirection: "row",
    flex: 1,
    flexDirection: "space-between",
  },

  buttonStyle: {
    fontWeight: "bold",
  },
});

export default Counter;
