import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addition, subtraction } from "./store/actions";

const Counter = (props) => {
  const data = useSelector((state) => state);
  const { counter } = data;
  const dispatch = useDispatch();

  return (
    <View style={styles.outerContainer}>
      <Text>{counter}</Text>
      <View style={styles.rowContainer}>
        <Button
          style={styles.buttonStyle}
          title="Add"
          onPress={() => dispatch(addition())}
        />
        <Button
          style={styles.buttonStyle}
          title="Subtract"
          onPress={() => dispatch(subtraction())}
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
