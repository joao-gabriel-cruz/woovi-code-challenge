import { format_money } from "../../utils"

interface HandleTypeInstallmentsProps {
  type: "installments" | "installments-text" | "total-value" | "installments-promotion"
  value: number
  fees?: number
  discount?: number
  amount_installments?: number

}

export const InstallmentService = () => {

  const countFeesAndDiscount = (value: number, fees?: number, discount?: number) => {
    let result = 0
    if (fees) {
      result = value + (value * fees)
    }

    if (discount) {
      result = value - (value * discount)
    }

    if (fees && discount) {
      result = value + (value * fees) - (value * discount)
    }

    return result
  }


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
    countFeesAndDiscount
  }
}