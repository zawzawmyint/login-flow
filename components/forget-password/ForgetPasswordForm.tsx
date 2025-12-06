import { useLocalization } from "@/hooks/useLocalization";
import { delay } from "@/utils/helper";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MyAppTextInput from "../general/MyAppTextInput";
import StyledButton from "../general/StyledButton";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("zack@example.com");
  const { t } = useLocalization();

  const handleSendResetLink = async () => {
    if (!email) {
      Alert.alert(t("auth.forgetPasswordDescription"));
      return;
    }
    await delay(1000);
    Alert.alert(t("auth.forgetPasswordSuccess.description"));
    console.log("Sending reset link to:", email);
    router.push("/fp-success");
  };
  return (
    <View style={styles.container}>
      <MyAppTextInput
        placeholder={t("auth.usernameOrEmail")}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <StyledButton
        title={t("auth.forgetPassword")}
        onPress={handleSendResetLink}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 80,
    gap: 30,
  },
});

export default ForgetPasswordForm;
