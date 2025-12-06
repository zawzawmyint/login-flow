import { Colors } from "@/constants/colors";
import { useLocalization } from "@/hooks/useLocalization";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import StyledButton from "../general/StyledButton";
import PinKeypad from "./PinKeypad";

export default function PinCodeForm({
  isEnterPin = false,
}: {
  isEnterPin?: boolean;
}) {
  const { t } = useLocalization();
  const [step, setStep] = useState(isEnterPin ? "enter" : "setup"); // "setup", "confirm",  "complete", "enter"
  const [setupPin, setSetupPin] = useState("");
  const [isError, setIsError] = useState("");
  const [currentPin, setCurrentPin] = useState<string[]>([]);

  const handlePinEntry = (enteredPin: string) => {
    if (step === "setup") {
      // First entry - store the PIN
      setSetupPin(enteredPin);
      setStep("confirm");
    } else if (step === "confirm") {
      // Second entry - verify it matches
      if (enteredPin === setupPin) {
        Alert.alert("Success", t("pinCode.confirmPinSuccess"));
        setStep("complete");
        // Here you would typically save the PIN securely
        // and navigate to the next screen
        router.push("/fingerprint");
      } else {
        setIsError(t("pinCode.confirmPinError"));
      }
    }
  };

  const cancelConfirm = () => {
    setStep("setup");
    setIsError("");
    setCurrentPin([]);
    setSetupPin("");
  };

  const handlePinEnter = (enteredPin: string) => {
    console.log("setupPin", setupPin);
    if (enteredPin === setupPin) {
      Alert.alert("Success", "PIN has been entered successfully!");
    } else {
      // setIsError("PIN does not match. Please try again.");
    }
    router.push("/welcome-back");
  };

  const handleComplete = (enteredPin: string) => {
    if (step === "enter") {
      handlePinEnter(enteredPin);
    } else {
      handlePinEntry(enteredPin);
    }
  };

  return (
    <View style={styles.app}>
      <Text style={styles.title}>
        {step === "setup"
          ? t("pinCode.setupPin")
          : step === "confirm"
          ? t("pinCode.confirmPin")
          : t("pinCode.enterPin")}
      </Text>
      {isError !== "" && <Text style={styles.error}>{isError}</Text>}
      <PinKeypad
        onComplete={handleComplete}
        pinLength={4}
        currentPin={currentPin}
        setCurrentPin={setCurrentPin}
        isEnterPin={step === "enter"}
      />
      {step === "confirm" && isError && (
        <StyledButton
          title={t("common.cancel")}
          onPress={cancelConfirm}
          type="link"
        />
      )}
      {step === "enter" && (
        <StyledButton
          title={t("common.forgotPin")}
          onPress={() => console.log("Forgot PIN?")}
          type="link"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "medium",
    color: Colors.text,
    marginBottom: 10,
  },

  error: {
    fontSize: 14,
    color: Colors.error,
    marginBottom: 10,
  },
});
