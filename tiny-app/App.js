import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MyContext } from "./src/context";

class App extends Component {
  static contextType = MyContext;
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
