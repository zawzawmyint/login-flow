import ScreenContainer from "@/components/global/ScreenContainer";
import ScreenTitleAndDescription from "@/components/global/ScreenTitleAndDescription";
import OtpForm from "@/components/otp/OtpForm";
import { useLocalization } from "@/hooks/useLocalization";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function OtpFormScreen() {
  const { t } = useLocalization();
  return (
    <ScreenContainer centered={false}>
      <TouchableOpacity
        onPress={() => router.push("/new-pin-code")}
        style={{ flex: 1 }}
      >
        <ScreenTitleAndDescription
          title={t("otp.otpForm.title")}
          description={t("otp.otpForm.description")}
        />
        <OtpForm />
      </TouchableOpacity>
    </ScreenContainer>
  );
}
