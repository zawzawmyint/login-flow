import MyAppText from "@/components/general/MyAppText";
import StyledButton from "@/components/general/StyledButton";
import ScreenContainer from "@/components/global/ScreenContainer";
import { Colors } from "@/constants/colors";
import { useLocalization } from "@/hooks/useLocalization";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TermsOfService() {
  const { t } = useLocalization();
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Ionicons
          name="phone-portrait-outline"
          size={120}
          color={Colors.primary}
        />
        <View style={styles.textContainer}>
          <MyAppText
            style={{ fontSize: 26, fontWeight: "bold", textAlign: "center" }}
          >
            {t("otp.otpRequest.title")}
          </MyAppText>
          <MyAppText
            style={{
              fontSize: 24,
              color: Colors.primary,
              textAlign: "center",
            }}
          >
            {t("otp.otpRequest.otpNumber")}
          </MyAppText>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton
            width={"100%"}
            type="primary"
            title={t("otp.otpRequest.verifyOtp")}
            onPress={() => router.push("/otp-form")}
          />
          <MyAppText style={{ textAlign: "center" }}>
            {t("otp.otpRequest.incorrectPhone")}
          </MyAppText>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 480,
  },
  textContainer: {
    gap: 10,
  },
  buttonContainer: {
    gap: 20,
    width: "100%",
  },
});
