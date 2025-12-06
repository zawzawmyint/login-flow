import { Colors } from "@/constants/colors";
import React from "react";
import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const StyledButton = ({
  title,
  onPress,
  width = "100%",
  disabled = false,
  type = "primary",
}: {
  title: string;
  onPress: () => void;
  width?: DimensionValue;
  disabled?: boolean;
  type?: "primary" | "outline" | "link";
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: width },
        type === "primary"
          ? styles.primaryButton
          : type === "outline"
          ? styles.outlineButton
          : styles.linkButton,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={
          type === "primary"
            ? styles.buttonText
            : type === "outline"
            ? styles.outlineText
            : styles.linkText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingVertical: 16,
    borderRadius: 8,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  outlineButton: {
    backgroundColor: Colors.outline,
    borderWidth: 1,
    borderColor: Colors.primary,
    color: Colors.primary,
  },
  outlineText: {
    color: Colors.primary,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  linkButton: {
    backgroundColor: "transparent",
  },
  linkText: {
    color: Colors.primary,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default StyledButton;
