import React from "react";
import { StyleSheet, View } from "react-native";

const ScreenContainer = ({
  centered = true,
  children,
}: {
  centered?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <View
      style={[
        styles.container,
        centered ? styles.centeredContainer : { paddingTop: 80 },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  centeredContainer: {
    justifyContent: "center",
  },
});

export default ScreenContainer;
