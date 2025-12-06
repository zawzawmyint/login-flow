import ForgetPasswordForm from "@/components/forget-password/ForgetPasswordForm";
import ScreenContainer from "@/components/global/ScreenContainer";
import ScreenTitleAndDescription from "@/components/global/ScreenTitleAndDescription";
import { useLocalization } from "@/hooks/useLocalization";
import React from "react";

export default function ForgetPasswordScreen() {
  const { t } = useLocalization();
  return (
    <ScreenContainer centered={false}>
      <ScreenTitleAndDescription
        title={t("auth.forgetPassword")}
        description={t("auth.forgetPasswordDescription")}
      />
      <ForgetPasswordForm />
    </ScreenContainer>
  );
}
