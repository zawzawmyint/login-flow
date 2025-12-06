# Login Flow App

A robust and modern React Native application built with Expo, implementing a specific login flow with biometric authentication and PIN security.

## Task Overview

The goal of this project is to implement the login flow exactly as demonstrated in the provided Figma reference.

- **Reference:** [Figma Prototype]()
- **Key Requirements:**
  - **PIN Length:** Must be exactly 4 digits.
  - **Theme:** Customized app theme color.
  - **Interaction:** Follow the specific flow outlined below.

## Expected Interaction Flow

This is the step-by-step user journey implemented in the app:

1.  **Splash Screen:** Initial launch screen.
2.  **Language Selection:** User selects **Thai** language.
3.  **Terms of Service:** User accepts the Terms of Service.
4.  **Login:** Tap "Log in".
5.  **OTP Verification:** Request and enter OTP code.
6.  **Identity Confirmation:** Tap anywhere to confirm identity (auto-pass simulation).
7.  **Set PIN:** Enter digit "5" (repeatedly) to set a new PIN.
8.  **Confirm PIN:** Re-enter digit "5" to confirm.
9.  **Biometric Setup:** User chooses to **Skip** fingerprint setup.
10. **Biometric Auth:** User **Cancels** fingerprint authentication.

## Tech Stack

- **Framework:** [React Native](https://reactnative.dev/) (v0.81.5) with [Expo](https://expo.dev/) (SDK 54)
- **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Localization:** [i18n-js](https://github.com/fnando/i18n-js) & [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- **UI:** [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/), [Expo Vector Icons](https://icons.expo.fyi/), Custom Components
- **Auth Components:** `react-native-otp-entry`, Custom PIN Pad, Local Authentication (Biometrics)

## Installation and Running

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo Go](https://expo.dev/client) app on your mobile device.

### Steps

1. **Clone & Install:**

   ```bash
   git clone https://github.com/zawzawmyint/login-flow.git
   cd login-flow
   npm install
   ```

2. **Run the App:**
   ```bash
   npm run start
   ```
   - Press `a` for Android, `i` for iOS, or scan the QR code with Expo Go.

## Project Structure

```
login-flow/
├── app/                 # Expo Router screens and layouts
│   ├── (auth)/          # Authentication group (Sign In, PIN, OTP, etc.)
│   └── ...
├── components/          # Reusable UI components
│   ├── general/         # Generic components (Buttons, Inputs, Text)
│   ├── global/          # Layout containers
│   └── ...
├── constants/           # App constants (Colors, Styles)
├── hooks/               # Custom React hooks (useLocalization, etc.)
├── locales/             # Translation files (en.ts, th.ts)
├── utils/               # Helper functions
└── assets/              # Images and fonts
```

Video Recording: [Link](https://www.figma.com)
