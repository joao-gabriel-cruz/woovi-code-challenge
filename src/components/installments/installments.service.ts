import { countFeesAndDiscount, format_money } from "../../utils"

interface HandleTypeInstallmentsProps {
  type: "installments" | "installments-text" | "total-value" | "installments-promotion"
  value: number
  fees?: number
  discount?: number
  amount_installments?: number

}

export const InstallmentService = () => {

  const handleTypeInstallments = (props: HandleTypeInstallmentsProps) => {
    const { amount_installments, value, type, discount, fees } = props
    switch (type) {
      case "installments":
        return `${amount_installments}x `
      case "installments-text":
        return format_money(countFeesAndDiscount(value, fees, discount) / amount_installments!)
      case "total-value":
        return "Total: " + format_money((countFeesAndDiscount(value, fees, discount)))
      case "installments-promotion":
        return discount ? `Ganhe ${discount * 100}% de Cashback` : ""
      default:
        return value
    }
  }

  return {
    handleTypeInstallments,
  }
}