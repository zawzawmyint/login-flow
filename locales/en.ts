export default {
  common: {
    cancel: "Cancel",
    accept: "Accept",
    confirm: "Confirm",
    forgotPin: "Forgot PIN?",
    english: "English",
    thai: "ภาษาไทย",
  },
  welcome: {
    title: "Welcome to MyApp",
    description:
      "You are successfully signed up. You are now ready to use MyApp.",
  },
  auth: {
    usernameOrEmail: "Username or Email",
    password: "Password",
    signIn: "Sign In",
    signUp: "Sign Up",
    dontHaveAccount: "Don't have an account?",
    forgetPassword: "Forget Password?",
    forgetPasswordDescription: "Enter your email to receive a reset link",
    forgetPasswordSuccess: {
      title: "Password Reset Successful",
      description: "Your password has been reset successfully.",
      proceedToLogin: "Proceed to Login",
    },
    rememberMe: "Remember me",
  },
  languageSelect: {
    title: "Select Language",
    description: "Please select your language",
  },
  termOfService: {
    title: "Terms of Service",
    content:
      "Please read our Terms of Service carefully. By using our app, you agree to be bound by these terms.",
    content2: "If you do not agree to these terms, please do not use our app.",
    content3: "By using our app, you also agree to our Privacy Policy.",
    content4:
      "If you have any questions about our Terms of Service or Privacy Policy, please contact us.",
  },
  otp: {
    otpRequest: {
      title: "We have sent a 6 digit code to this number",
      incorrectPhone: "Incorrect phone number?. Please contact to 02-XXX-XXXX.",
      verifyOtp: "Verify OTP",
      otpNumber: "081-XXX-9515",
    },
    otpForm: {
      title: "OTP Verification",
      description: "Enter the OTP sent to your phone number (081-XXX-9515)",
      didntReceiveCode: "Didnt receive the code?",
      resend: "Resend",
      resendIn: "Resend in",
    },
  },
  pinCode: {
    setupPin: "Set up your PIN Code",
    confirmPin: "Confirm your PIN Code",
    enterPin: "Enter your PIN",
    confirmPinSuccess: "PIN Code has been set up successfully!",
    confirmPinError: "PIN Code does not match. Please try again.",
  },
  fingerprint: {
    title: "Touch ID",
    description:
      "Please place your finger on the Touch ID scanner to access quickly",
    accessTitle: "Touch ID for MyApp",
    accessDescription: "Login with Touch ID or cancel to enter PIN",
    success: "Touch ID authenticated",
    button: "Set up Touch ID",
    skip: "Skip",
  },
} as const;
