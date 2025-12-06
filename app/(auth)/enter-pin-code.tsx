import ScreenContainer from "@/components/global/ScreenContainer";
import PinCodeForm from "@/components/pincode/PinCodeForm";
import { useLocalization } from "@/hooks/useLocalization";
import React, { useEffect } from "react";
import { Alert } from "react-native";

export default function NewPinCodeScreen() {
  const { t } = useLocalization();
  useEffect(() => {
    Alert.alert(
      "🌀" + " " + t("fingerprint.accessTitle"),
      t("fingerprint.accessDescription"),
      [
        {
          text: t("pinCode.enterPin"),
          onPress: () => console.log("Enter PIN Pressed / Show Keyboard"),
          style: "default", // or "default"
        },

        {
          text: t("common.cancel"),
          onPress: () => console.log("Cancel Pressed / Dismissing Alert"),
          style: "cancel", // Using "cancel" style often places it correctly
        },
      ],
      // Allow the user to tap outside the box to dismiss it if they wish (optional)
      { cancelable: true }
    );
  }, []);
  return (
    <ScreenContainer centered={false}>
      <PinCodeForm isEnterPin={true} />
    </ScreenContainer>
  );
}
