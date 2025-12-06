import React from "react";
import { Text, TextStyle } from "react-native";

const MyAppText = ({
  style,
  children,
}: {
  style?: TextStyle;
  children: React.ReactNode;
}) => {
  return <Text style={{ fontSize: 16, ...style }}>{children}</Text>;
};

export default MyAppText;
