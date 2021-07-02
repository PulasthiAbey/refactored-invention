import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MyContext } from "../context";
import { Button } from "react-native-elements";
import { MainLogo } from "../utils/tools";

const StageTwo = () => {
  const context = useContext(MyContext);
  return (
    <view>
      <MainLogo />
      <Text>The Looser is </Text>
      <Text
        style={{
          marginTop: 30,
          fontSize: 30,
        }}
      >
        {context.state.result}
      </Text>
      <Button
        buttonStyle={style.button}
        title="Try Again"
        onPress={() => context.getNewLooser()}
      />
      <Button title="Start Over" onPress={() => context.resetGame()} />
    </view>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#41EB66",
    marginTop: 20,
  },
});

export default StageTwo;
