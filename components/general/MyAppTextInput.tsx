import React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
} from "react-native";

const MyAppTextInput = ({
  isPassword = false,
  style,
  placeholder,
  onChangeText,
  value,
}: {
  isPassword?: boolean;
  style?: TextStyle;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  keyboardType?: KeyboardTypeOptions;
}) => {
  return (
    <TextInput
      style={{
        padding: 14,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: "#ccc",
        borderRadius: 5,
        outlineWidth: 0,
        fontSize: 16,
        ...style,
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={isPassword}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 14,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    outlineWidth: 0,
    fontSize: 16,
  },
});

export default MyAppTextInput;
