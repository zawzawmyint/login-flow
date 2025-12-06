import { Colors } from "@/constants/colors";
import React from "react";
import { DimensionValue, StyleSheet, View } from "react-native";

const Separator = ({ width = "100%" }: { width?: DimensionValue }) => {
  return <View style={[styles.separator, { width }]} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Colors.separator,
  },
});

export default Separator;
