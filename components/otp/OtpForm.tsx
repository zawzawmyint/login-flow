import { Colors } from "@/constants/colors";
import { useLocalization } from "@/hooks/useLocalization";
import { delay } from "@/utils/helper";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import MyAppText from "../general/MyAppText";

export default function OtpForm() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const { t } = useLocalization();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    if (canResend) {
      setTimer(60);
      setCanResend(false);
      setOtp("");
      // Add your resend OTP logic here
      console.log("Resending OTP...");
    }
  };

  const handleSubmit = async () => {
    await delay(1000);
    router.push("/new-pin-code");
  };

  return (
    <View style={styles.wrapper}>
      <OtpInput
        numberOfDigits={6}
        type="numeric"
        secureTextEntry={false}
        onTextChange={setOtp}
        theme={{
          pinCodeContainerStyle: styles.pinCodeContainer,
        }}
        onFilled={(text) => handleSubmit()}
      />

      <View style={styles.resendContainer}>
        <MyAppText style={styles.resendText}>
          {t("otp.otpForm.didntReceiveCode")}{" "}
        </MyAppText>

        {canResend ? (
          <TouchableOpacity onPress={handleResend}>
            <MyAppText style={styles.resendLink}>
              {t("otp.otpForm.resend")}
            </MyAppText>
          </TouchableOpacity>
        ) : (
          <MyAppText style={styles.timerText}>
            {t("otp.otpForm.resendIn")} {timer}s
          </MyAppText>
        )}
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  wrapper: {
    paddingHorizontal: 16,
    gap: 20,
    marginVertical: 60,
  },
  pinCodeContainer: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#999",
    borderStyle: "solid",
    borderRadius: 0,
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  resendText: {
    fontSize: 16,
    color: "#666",
  },
  resendLink: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "600",
  },
  timerText: {
    color: Colors.primary,
  },
});
