import React from "react";
import { StyleSheet, View } from "react-native";
import MyAppText from "../general/MyAppText";

const ScreenTitleAndDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View style={styles.container}>
      <MyAppText style={styles.title}>{title}</MyAppText>
      <MyAppText style={styles.description}>{description}</MyAppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
  description: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: "400",
    color: "#666666",
    lineHeight: 24,
  },
});

export default ScreenTitleAndDescription;
