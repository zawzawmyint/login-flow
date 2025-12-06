import en from "@/locales/en";
import th from "@/locales/th";
import { I18n } from "i18n-js";

export const translations = {
  en,
  th,
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = NestedKeyOf<typeof translations.en>;

// Helper type to get nested keys with dot notation
type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends object
    ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
    : `${K}`;
}[keyof T & string];

const i18n = new I18n(translations);

// i18n.locale = getLocales()[0].languageCode ?? "en";
i18n.locale = "th";
console.log(i18n.locale);
i18n.enableFallback = true;
i18n.defaultLocale = "th";

export default i18n;
