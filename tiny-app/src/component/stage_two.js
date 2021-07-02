import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MyContext } from "../context";

const StageTwo = () => {
  const context = useContext(MyContext);
  return (
    <view>
      <Text>The Looser is </Text>
      <Text>{context.state.result}</Text>
    </view>
  );
};

export default StageTwo;
