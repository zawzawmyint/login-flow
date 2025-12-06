import { Colors } from "@/constants/colors";
import { useLocalization } from "@/hooks/useLocalization";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Separator from "../general/Separator";
import StyledButton from "../general/StyledButton";

const TermOfServiceCard = () => {
  const router = useRouter();
  const { t, locale } = useLocalization();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="book-outline" size={24} color={Colors.primary} />
        <Text style={styles.headerText}>{t("termOfService.title")}</Text>
      </View>
      <Separator />
      <Text style={styles.contentText}>{t("termOfService.content")}</Text>
      <Text style={styles.contentText}>{t("termOfService.content2")}</Text>
      <Text style={styles.contentText}>{t("termOfService.content3")}</Text>
      <Text style={styles.contentText}>{t("termOfService.content4")}</Text>
      <View style={styles.buttonContainer}>
        <StyledButton
          title={t("common.cancel")}
          width="47%"
          type="outline"
          onPress={() => router.back()}
        />
        <StyledButton
          title={t("common.accept")}
          width="47%"
          onPress={() => router.push("/sign-in")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.background,
    borderRadius: 12,
    elevation: 2,
    gap: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    fontWeight: "400",
    opacity: 0.7,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});

export default TermOfServiceCard;
