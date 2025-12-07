export default {
  common: {
    cancel: "ยกเลิก",
    accept: "ตกลง",
    confirm: "ยืนยัน",
    forgotPin: "ลืม PIN?",
    english: "English",
    thai: "ภาษาไทย",
  },
  welcome: {
    title: "ยินดีต้อนรับสู่ MyApp",
    description: "คุณได้สมัครสมาชิกเรียบร้อยแล้ว คุณสามารถใช้ MyApp ได้แล้ว",
    techStacks: "เทхโนโลยีที่ใช้:",
    features: "ฟีเจอร์:",
  },
  auth: {
    usernameOrEmail: "ชื่อผู้ใช้หรืออีเมล",
    password: "รหัสผ่าน",
    signIn: "เข้าสู่ระบบ",
    signUp: "สมัครสมาชิก",
    dontHaveAccount: "ยังไม่มีบัญชีผู้ใช้?",
    forgetPassword: "ลืมรหัสผ่าน?",
    forgetPasswordDescription: "กรอกอีเมลของคุณเพื่อรับลิงก์รีเซ็ตรหัสผ่าน",
    forgetPasswordSuccess: {
      title: "รีเซ็ตรหัสผ่านสำเร็จ",
      description: "รหัสผ่านของคุณได้รับการรีเซ็ตเรียบร้อยแล้ว",
      proceedToLogin: "ดำเนินการเข้าสู่ระบบ",
    },
    rememberMe: "จดจำฉัน",
  },
  languageSelect: {
    title: "เลือกภาษา",
    description: "กรุณาเลือกภาษาของคุณ",
  },
  termOfService: {
    title: "เงื่อนไขการให้บริการ",
    content:
      "กรุณาอ่านเงื่อนไขการให้บริการของเราอย่างละเอียด โดยการใช้แอปของเรา คุณตกลงที่จะผูกพันกับข้อกำหนดเหล่านี้",
    content2: "หากคุณไม่เห็นด้วยกับข้อกำหนดเหล่านี้ กรุณาอย่าใช้แอปของเรา",
    content3:
      "โดยการใช้แอปของเรา คุณยังตกลงที่จะผูกพันกับนโยบายความเป็นส่วนตัวของเราด้วย",
    content4:
      "หากคุณมีคำถามใดๆ เกี่ยวกับเงื่อนไขการให้บริการหรือนโยบายความเป็นส่วนตัวของเรา กรุณาติดต่อเรา",
  },
  otp: {
    otpRequest: {
      title: "เราได้ส่งรหัส 6 หลักไปยังหมายเลขนี้แล้ว",
      incorrectPhone: "หมายเลขโทรศัพท์ไม่ถูกต้อง?. กรุณาติดต่อ 02-XXX-XXXX.",
      verifyOtp: "ยืนยัน OTP",
      otpNumber: "081-XXX-9515",
    },
    otpForm: {
      title: "การยืนยัน OTP",
      description:
        "กรอกรหัส OTP ที่ส่งไปยังหมายเลขโทรศัพท์ของคุณ (081-XXX-9515)",
      didntReceiveCode: "ไม่ได้รับรหัส?",
      resend: "ส่งซ้ำ",
      resendIn: "ส่งซ้ำใน",
    },
  },
  pinCode: {
    setupPin: "ตั้งค่า PIN Code ของคุณ",
    confirmPin: "ยืนยัน PIN Code ของคุณ",
    enterPin: "กรอก PIN ของคุณ",
    confirmPinSuccess: "PIN Code ของคุณถูกตั้งค่าเรียบร้อยแล้ว!",
    confirmPinError: "PIN Code ไม่ตรงกัน กรุณาลองใหม่อีกครั้ง",
  },
  fingerprint: {
    title: "Touch ID",
    description:
      "กรุณาใส่ลายนิ้วของคุณบนเครื่องสแกนเนอร์ Touch ID เพื่อเข้าสู่ระบบได้เร็วขึ้น",
    accessTitle: "Touch ID สำหรับ MyApp",
    accessDescription:
      "เข้าสู่ระบบด้วย Touch ID หรือยกเลิกเพื่อเข้าสู่ระบบด้วย PIN",
    success: "การยืนยันตัวตนด้วย Touch ID สำเร็จ",
    button: "ตั้งค่าการยืนยันตัวตนด้วย Touch ID",
    skip: "ข้าม",
  },
} as const;
