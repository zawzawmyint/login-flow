import MyAppText from "@/components/general/MyAppText";
import ScreenContainer from "@/components/global/ScreenContainer";
import { useLocalization } from "@/hooks/useLocalization";
import React from "react";

const Welcome = () => {
  const { t } = useLocalization();
  return (
    <ScreenContainer centered={false}>
      <MyAppText style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        {t("welcome.title")}
      </MyAppText>
      <MyAppText style={{ fontSize: 16, fontWeight: "400" }}>
        {t("welcome.description")}
      </MyAppText>
    </ScreenContainer>
  );
};

export default Welcome;
