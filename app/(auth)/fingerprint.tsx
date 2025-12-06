import FingerprintForm from "@/components/fingerprint/Fingerprint";
import ScreenContainer from "@/components/global/ScreenContainer";
import ScreenTitleAndDescription from "@/components/global/ScreenTitleAndDescription";
import { useLocalization } from "@/hooks/useLocalization";
import React from "react";

export default function FingerprintScreen() {
  const { t } = useLocalization();
  return (
    <ScreenContainer centered={false}>
      <ScreenTitleAndDescription
        title={t("fingerprint.title")}
        description={t("fingerprint.description")}
      />
      <FingerprintForm />
    </ScreenContainer>
  );
}
