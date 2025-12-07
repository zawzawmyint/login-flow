import MyAppText from "@/components/general/MyAppText";
import ScreenContainer from "@/components/global/ScreenContainer";
import ScreenTitleAndDescription from "@/components/global/ScreenTitleAndDescription";
import { useLocalization } from "@/hooks/useLocalization";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const Welcome = () => {
  const { t } = useLocalization();
  return (
    <ScreenContainer centered={false}>
      <ScreenTitleAndDescription
        title={t("welcome.title")}
        description={t("welcome.description")}
      />
      <View style={styles.section}>
        <MyAppText style={styles.sectionTitle}>
          {t("welcome.techStacks")}
        </MyAppText>

        <FlatList
          data={[
            { id: 1, name: "React Native with Expo" },
            { id: 2, name: "Typescript" },
            { id: 3, name: "Expo Router" },
            { id: 4, name: "React Native Reanimated" },
            { id: 5, name: "Expo Vector Icons" },
            { id: 6, name: "Custom Components" },
            { id: 7, name: "react-native-otp-entry" },
            { id: 8, name: "Custom PIN Pad" },
            { id: 9, name: "Local Authentication (Biometrics)" },
          ]}
          renderItem={({ item }) => (
            <MyAppText style={styles.sectionItem}>{item.name}</MyAppText>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.section}>
        <MyAppText style={styles.sectionTitle}>
          {t("welcome.features")}
        </MyAppText>
        <FlatList
          data={[
            {
              id: 1,
              name: "1. Splash Screen: Initial launch screen.",
            },
            {
              id: 2,
              name: "2. Terms of Service: User accepts the Terms of Service.",
            },
            { id: 3, name: "3. Login: Tap 'Log in'." },
            {
              id: 4,
              name: "4. OTP Verification: Request and enter OTP code.",
            },
            {
              id: 5,
              name: "5. Identity Confirmation: Tap anywhere to confirm identity (auto-pass simulation).",
            },
            {
              id: 6,
              name: '6. Set PIN: Enter digit "5" (repeatedly) to set a new PIN.',
            },
            {
              id: 7,
              name: "7. Confirm PIN: Re-enter digit '5' to confirm.",
            },
            {
              id: 8,
              name: "8. Biometric Setup: User chooses to **Skip** fingerprint setup.",
            },
            {
              id: 9,
              name: "9. Biometric Auth: User **Cancels** fingerprint authentication.",
            },
          ]}
          renderItem={({ item }) => (
            <MyAppText style={styles.sectionItem}>{item.name}</MyAppText>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionItem: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 1.5,
  },
});

export default Welcome;
