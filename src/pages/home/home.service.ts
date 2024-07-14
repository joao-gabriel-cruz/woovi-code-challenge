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
    const response = installments_request.map((installment) => ({ ...installment, checked: false, paidOut: false }))
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
    if (selectedInstallment.length === 0) return
    const installment_selected = selectedInstallment[selectedInstallment.length - 1]
    const result = installments_request.map((item) => {
      if (installment_selected.amount === item.amount) {
        return { ...item, checked: true }
      } else {
        return { ...item, checked: false }
      }
    })
    setInstallments(result)
  }

  return {
    getInstallments,
    handleCheck,
    verifyInstallments
  }
}