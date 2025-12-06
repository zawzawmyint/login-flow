import { LocalizationProvider } from "@/components/global/LocalizationContext";
import { Colors } from "@/constants/colors";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make API calls, etc.
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    // Custom splash screen component
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/profile.png")}
          style={{ width: 200, height: 200, borderRadius: 20 }}
          resizeMode="contain"
        />
      </View>
    );
  }
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <LocalizationProvider>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      </LocalizationProvider>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
