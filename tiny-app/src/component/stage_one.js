import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, ListItem, Text } from "react-native-elements";

import { MyContext } from "../context";

const StageOne = () => {
  const context = useContext(MyContext);
  return (
    <view>
      <Text>Stage One Opened</Text>
    </view>
  );
};

export default StageOne;
