import { Colors } from "@/constants/colors";
import { delay } from "@/utils/helper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import MyAppText from "../general/MyAppText";
import StyledButton from "../general/StyledButton";
import { useLocalization } from "@/hooks/useLocalization";

const FingerprintForm = () => {
  const { t } = useLocalization();
  const handleAuthenticateWithFingerprint = async () => {
    await delay(1000);
    Alert.alert(t("fingerprint.success"));
    console.log("Authenticating with fingerprint");
  };
  return (
    <View style={styles.container}>
      <Ionicons
        name="finger-print-outline"
        size={100}
        color={Colors.primary}
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5, // For Android compatibility
        }}
      />
      <View style={{ width: "100%", gap: 30 }}>
        <StyledButton
          title={t("fingerprint.button")}
          onPress={handleAuthenticateWithFingerprint}
        />
        <MyAppText style={{ color: Colors.primary, textAlign: "center" }}>
          <Link href="/enter-pin-code">{t("fingerprint.skip")}</Link>
        </MyAppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 160,
    gap: 30,
    justifyContent: "space-between",
    alignItems: "center",
    height: "50%",
  },
});

export default FingerprintForm;
