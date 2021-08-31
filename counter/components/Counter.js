import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const additionHandler = () => {
    setCounter(counter + 1);
  };

  const subtractionHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.outerContainer}>
      <Text>{counter}</Text>
      <View style={styles.rowContainer}>
        <Button
          style={styles.buttonStyle}
          title="Add"
          onPress={() => additionHandler()}
        />
        <Button
          style={styles.buttonStyle}
          title="Subtract"
          onPress={() => subtractionHandler()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  rowContainer: {
    marginTop: 20,
    padding: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },

  buttonStyle: {
    fontWeight: "bold",
  },
});

export default Counter;
