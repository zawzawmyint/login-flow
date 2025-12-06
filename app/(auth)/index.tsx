import StyledButton from "@/components/general/StyledButton";
import ScreenContainer from "@/components/global/ScreenContainer";
import ScreenTitleAndDescription from "@/components/global/ScreenTitleAndDescription";
import { useLocalization } from "@/hooks/useLocalization";
import { Locale } from "@/utils/i18n";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const { t, changeLanguage } = useLocalization();

  const handleChangeLanguage = (language: Locale) => {
    changeLanguage(language);
    router.push("/terms-of-service");
  };
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <ScreenTitleAndDescription
          title={t("languageSelect.title")}
          description={t("languageSelect.description")}
        />
        <View style={styles.buttonContainer}>
          <StyledButton
            title={t("common.english")}
            onPress={() => handleChangeLanguage("en")}
          />
          <StyledButton
            title={t("common.thai")}
            onPress={() => handleChangeLanguage("th")}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 120,
  },
  buttonContainer: {
    gap: 20,
  },
});
