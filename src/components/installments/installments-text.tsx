import { Typography } from "@mui/material";
import { InstallmentService } from "./installments.service";
import { Installment } from "../../@types/installments";
import { theme } from "../../styles/theme";

export interface InstallmentsTextProps {
  item: Installment
  amount_installments?: number
  value: number
  type: "installments" | "installments-text" | "total-value" | "installments-promotion"
}

const handleTypeInstallmentsStyle = (type: "installments" | "installments-text" | "total-value" | "installments-promotion") => {
  let defaultStyle: any = { variant: "h6", fontFamily: 'Nunito', component: "div" }

  switch (type) {
    case "installments":
      defaultStyle = { ...defaultStyle, color: "textPrimary", fontWeight: 800, fontSize: 20 }
      break
    case "installments-text":
      defaultStyle = { ...defaultStyle, color: "textPrimary", fontWeight: 500, fontSize: 20, ml: 1 }
      break
    case "total-value":
      defaultStyle = { ...defaultStyle, color: "#9f9f9f", fontWeight: 500, fontSize: 14, mt: -1.2 }
      break
    case "installments-promotion":
      defaultStyle = { ...defaultStyle, color: theme.palette.primary.main, fontWeight: 600, fontSize: 14, ml: 1 }
      break
    default:
      break
  }
  return defaultStyle
}

export const InstallmentsText = (props: InstallmentsTextProps) => {
  const { amount_installments, value, type } = props
  const { discount, fees } = props.item
  const { handleTypeInstallments } = InstallmentService()


  return (
    <Typography
      {...handleTypeInstallmentsStyle(type)}
    >
      {handleTypeInstallments({
        amount_installments,
        value,
        type,
        discount,
        fees
      })}
    </Typography>

  );
}