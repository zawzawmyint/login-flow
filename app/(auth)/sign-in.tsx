import { default as MyAppText } from "@/components/general/MyAppText";
import MyAppTextInput from "@/components/general/MyAppTextInput";
import Separator from "@/components/general/Separator";
import StyledButton from "@/components/general/StyledButton";
import ScreenContainer from "@/components/global/ScreenContainer";
import { useLocalization } from "@/hooks/useLocalization";
import { delay } from "@/utils/helper";
import { Link, useRouter } from "expo-router";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Colors } from "@/constants/colors";
import { Alert, StyleSheet, View } from "react-native";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("zack@example.com");
  const [password, setPassword] = React.useState("123456");
  const { t } = useLocalization();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    await delay(1000);
    setEmail("");
    setPassword("");
    router.push("/otp-request");
  };

  return (
    <ScreenContainer>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? undefined : "height"}
      > */}
      <View style={styles.container}>
        <MyAppTextInput
          isPassword={false}
          placeholder={t("auth.usernameOrEmail")}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <MyAppTextInput
          isPassword={true}
          placeholder={t("auth.password")}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.rememberMeContainer}>
          <BouncyCheckbox
            id="rememberMe"
            style={styles.rememberMeItem}
            iconStyle={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: Colors.primary,
            }}
            fillColor={Colors.primary}
            onPress={(isChecked: boolean) => {}}
            text={t("auth.rememberMe")}
          />
          <MyAppText style={styles.rememberMeItem}>
            <Link href="/forget-password">{t("auth.forgetPassword")}</Link>
          </MyAppText>
        </View>
        <StyledButton title={t("auth.signIn")} onPress={handleSignIn} />
        <View style={styles.separatorContainer}>
          <Separator width="30%" />
          <MyAppText>{t("auth.dontHaveAccount")}</MyAppText>
        </View>
        <StyledButton
          type="outline"
          title={t("auth.signUp")}
          onPress={() => router.push("/")}
        />
      </View>
      {/* </KeyboardAvoidingView> */}
    </ScreenContainer>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    gap: 35,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rememberMeItem: {
    width: "60%",
  },
});
