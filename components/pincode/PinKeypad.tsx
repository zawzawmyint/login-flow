import { Colors } from "@/constants/colors";
import { delay } from "@/utils/helper";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PinKeypad = ({
  onComplete,
  pinLength = 4,
  currentPin,
  setCurrentPin,
  isEnterPin = false,
}: {
  onComplete: (pin: string) => void;
  pinLength?: number;
  currentPin: string[];
  setCurrentPin: (pin: string[]) => void;
  isEnterPin?: boolean;
}) => {
  const [pressedButton, setPressedButton] = React.useState<string | null>(null);

  const handlePress = async (num: string) => {
    if (currentPin.length < pinLength) {
      const newPin = [...currentPin, num];
      setCurrentPin(newPin);

      await delay(500);

      if (newPin.length === pinLength) {
        onComplete(newPin.join(""));
        setCurrentPin([]);
      }
    }
  };

  const handleDelete = () => {
    setCurrentPin(currentPin.slice(0, -1));
  };

  const buttons = isEnterPin
    ? [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["F", "0", "⌫"],
      ]
    : [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["C", "0", "⌫"],
      ];

  const clearPin = () => {
    setCurrentPin([]);
  };

  return (
    <View style={styles.container}>
      {/* PIN Display - Dots */}
      <View style={styles.pinDisplay}>
        {[...Array(pinLength)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.pinDot,
              index < currentPin.length && styles.pinDotFilled,
            ]}
          />
        ))}
      </View>

      {/* Keypad */}
      <View style={styles.keypad}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, btnIndex) => (
              <Pressable
                onPressIn={() => setPressedButton(button)}
                onPressOut={() => setPressedButton(null)}
                key={btnIndex}
                style={[
                  button === "" ? styles.emptyButton : styles.button,
                  {
                    backgroundColor:
                      pressedButton === button && button !== ""
                        ? Colors.primary
                        : "transparent",
                  },
                ]}
                onPress={() => {
                  if (button === "⌫") handleDelete();
                  else if (button === "C") clearPin();
                  else if (button === "F") clearPin();
                  else if (button !== "") handlePress(button);
                }}
                disabled={button === ""}
              >
                {button === "F" ? (
                  <Ionicons
                    name="finger-print"
                    size={30}
                    color={Colors.primary}
                  />
                ) : (
                  <Text
                    style={[
                      styles.buttonText,
                      {
                        color:
                          pressedButton === button && button !== ""
                            ? "white"
                            : "",
                      },
                    ]}
                  >
                    {button}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default PinKeypad;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  pinDisplay: {
    flexDirection: "row",
    marginBottom: 50,
    gap: 15,
  },
  pinDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.text,
    backgroundColor: "transparent",
  },
  pinDotFilled: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  keypad: {
    gap: 15,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "600",
    color: Colors.text,
  },
  emptyButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
});
