/* eslint-disable no-unused-vars */
import { InstallmentsBox, InstallmentsBoxProps } from "./installments-box";
import { InstallmentsContent, InstallmentsContentProps } from "./installments-content";
import { InstallmentsLabel, InstallmentsLabelProps } from "./installments-label";
import { InstallmentsPromotion, InstallmentsPromotionProps } from "./installments-promotion";
import { InstallmentsRoot, InstallmentsRootProps } from "./installments-root";
import { InstallmentsText, InstallmentsTextProps } from "./installments-text";
import { JSX } from "@emotion/react/jsx-runtime";

interface InstallmentsProps {
  Root: (props: InstallmentsRootProps) => JSX.Element;
  Content: (props: InstallmentsContentProps) => JSX.Element;
  Text: (props: InstallmentsTextProps) => JSX.Element;
  Promotion: (props: InstallmentsPromotionProps) => JSX.Element | null;
  Label: (props: InstallmentsLabelProps) => JSX.Element | null;
  Box: (props: InstallmentsBoxProps) => JSX.Element;
}

export const Installments: InstallmentsProps = {
  Root: InstallmentsRoot,
  Content: InstallmentsContent,
  Text: InstallmentsText,
  Promotion: InstallmentsPromotion,
  Label: InstallmentsLabel,
  Box: InstallmentsBox
}