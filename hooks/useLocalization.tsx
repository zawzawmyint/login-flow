import {
  LocalizationContext,
  LocalizationContextType,
} from "@/components/global/LocalizationContext";
import { useContext } from "react";

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization must be used within LocalizationProvider");
  }
  return context;
};
