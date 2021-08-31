import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Counter = () => {
  return (
    <View style={styles.outerContainer}>
      <Text>0</Text>
      <View style={styles.rowContainer}>
        <View style={styles.columnContainer}>
          <Button>ADD</Button>
        </View>
        <View>
          <Button>SUBTRACT</Button>
        </View>
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
  },

  columnedContainer: {
    flex: 1,
    flexdirection: "column",
    padding: 10,
  },
});

export default Counter;
