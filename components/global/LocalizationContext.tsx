// LocalizationContext.tsx
import i18n, { Locale, TranslationKeys } from "@/utils/i18n";

import React, { createContext, ReactNode, useState } from "react";

// Define the shape of the context
export interface LocalizationContextType {
  locale: string;
  changeLanguage: (lang: Locale) => void;
  t: (key: TranslationKeys, params?: Record<string, string | number>) => string;
}

// Create context with undefined as initial value
export const LocalizationContext = createContext<
  LocalizationContextType | undefined
>(undefined);

// Provider props
interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [locale, setLocale] = useState<string>(i18n.locale);

  const changeLanguage = (lang: Locale): void => {
    i18n.locale = lang;
    setLocale(lang);
  };

  const t = (
    key: TranslationKeys,
    params?: Record<string, string | number>
  ): string => {
    return i18n.t(key, params);
  };

  const value: LocalizationContextType = {
    locale,
    changeLanguage,
    t,
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

// Custom hook with type safety
