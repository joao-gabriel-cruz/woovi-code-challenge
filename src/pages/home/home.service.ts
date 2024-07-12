import { Installment } from "../../@types/installments"
import { installments_request } from "../../fake/instalments"

interface HomeServiceProps {
  setInstallments: any
  installments: Installment[]
  setSelectedInstallment: any
  selectedInstallment: Installment[]
}

export const HomeService = (props: HomeServiceProps) => {

  const { setInstallments, installments, setSelectedInstallment, selectedInstallment } = props

  const getInstallments = async () => {
    const response = installments_request.map((installment) => ({ ...installment, checked: false }))
    setInstallments(response)
  }

  const handleCheck = (installment_selected: Installment) => {
    const new_installments = [...installments]

    const response = new_installments.map((item) => {
      if (installment_selected.id === item.id) {
        return { ...item, checked: true }
      } else {
        return { ...item, checked: false }
      }
    }).sort((a, b) => a.amount - b.amount)

    setSelectedInstallment(new_installments.filter((installment) => installment.amount <= installment_selected.amount))

    setInstallments(response)
  }

  const verifyInstallments = () => {
    const installment_selected = selectedInstallment[selectedInstallment.length - 1]
    setInstallments(installments.map((item) => {
      if (installment_selected.id === item.id) {
        return { ...item, checked: true }
      } else {
        return { ...item, checked: false }
      }
    }))
  }

  return {
    getInstallments,
    handleCheck,
    verifyInstallments
  }
}