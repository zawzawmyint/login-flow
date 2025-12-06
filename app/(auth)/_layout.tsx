import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* language select route  */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="welcome-back" options={{ headerShown: false }} />
      {/* terms of service route  */}
      <Stack.Screen
        name="terms-of-service"
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Makes the header background transparent
          },

          headerTransparent: true, //
          headerBackVisible: true,
        }}
      />
      {/* sign in route  */}
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      {/* forget password route  */}
      <Stack.Screen
        name="forget-password"
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Makes the header background transparent
          },
          headerTransparent: true, //
          headerBackVisible: true,
        }}
      />

      <Stack.Screen
        name="otp-request"
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Makes the header background transparent
          },
          headerTransparent: true, //
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="otp-form"
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "transparent", // Makes the header background transparent
          },
          headerTransparent: true, //
          headerBackVisible: true,
        }}
      />
      {/* forget password success route  */}
      <Stack.Screen name="fp-success" options={{ headerShown: false }} />
      {/* new pin code route  */}
      <Stack.Screen name="new-pin-code" options={{ headerShown: false }} />
      {/* fingerprint route  */}
      <Stack.Screen name="fingerprint" options={{ headerShown: false }} />
      <Stack.Screen name="enter-pin-code" options={{ headerShown: false }} />
    </Stack>
  );
}
