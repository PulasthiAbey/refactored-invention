import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, ListItem, Text } from "react-native-elements";

import { MyContext } from "../context";

const StageOne = () => {
  const context = useContext(MyContext);

  // SHowing the players function
  const renderPlayers = () =>
    context.state.players.map((item, idx) => (
      <ListItem
        key={idx}
        bottomDivider
        style={{ width: "100%" }}
        onLongPress={() => context.removePlayer(idx)}
      >
        <ListItem.Chevron />
        <ListItem.content>
          <ListItem.Title>
            <Text>{item}</Text>
          </ListItem.Title>
        </ListItem.content>
      </ListItem>
    ));

  return (
    <>
      <Formik
        initialValue={{ player: "" }}
        validationSchema={Yup.object({
          player: Yup.string()
            .min(3, "Must be more than 3 characters")
            .max(15, "Less than 15 characters are allowed")
            .required("Sorry the name is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          context.addPlayer(values.player);
          resetForm();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <Text>Tinny App</Text>
            {/* //input line of the interface */}
            <Input
              placeholder="Name"
              leftIcon={{ type: "antdesign", name: "adduser" }}
              inputContainerStyle={{
                marginHorizontal: 50,
                marginTop: 50,
              }}
              onChangeText={handleChange("player")}
              onBlur={handleBlur("player")}
              value={values.player}
            />
            {/* Error Messages */}
            renderErrorMessage={errors.player && touched.player}
            errorMessage={errors.player}
            errorStyle=
            {{
              marginHorizontal: 50,
              marginTop: 5,
            }}
            {/* Button of the page */}
            <Button
              buttonStyle={styles.button}
              title="Add Player"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      {/* // Viewing the intems in the player list */}
      <View style={{ padding: 20, width: "100%" }}>
        {context.state.players && context.state.players.length > 0 ? (
          <>
            <Text>List of Players</Text>
            {renderPlayers()}
          </>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "DB3E01",
    marginTop: 20,
  },
});

export default StageOne;
