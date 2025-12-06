import ScreenContainer from "@/components/global/ScreenContainer";
import PinCodeForm from "@/components/pincode/PinCodeForm";
import React from "react";

export default function NewPinCodeScreen() {
  return (
    <ScreenContainer centered={false}>
      <PinCodeForm />
    </ScreenContainer>
  );
}
