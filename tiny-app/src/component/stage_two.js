import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MyContext } from "../context";

const StageTwo = () => {
  const context = useContext(MyContext);
  return (
    <view>
      <Text>Stage Two Opened</Text>
    </view>
  );
};

export default StageTwo;
