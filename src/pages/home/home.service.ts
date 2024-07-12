import { Installment } from "../../@types/installments"
import { installments_request } from "../../fake/instalments"

interface HomeServiceProps {
  setInstallments: any
  installments: Installment[]
}

export const HomeService = (props: HomeServiceProps) => {

  const { setInstallments, installments } = props

  const getInstallments = async () => {
    const response = installments_request.map((installment) => ({ ...installment, checked: false }))
    setInstallments(response)
  }

  const handleCheck = (installment_selected: Installment) => {
    const new_installments = [...installments]

    const response = new_installments.map((item) => {
      if (installment_selected.id === item.id) {
        localStorage.setItem('installment', JSON.stringify(new_installments.filter((installment) => installment.amount <= installment_selected.amount)))
        return { ...item, checked: true }
      } else {
        return { ...item, checked: false }
      }
    })

    setInstallments(response.sort((a, b) => a.amount - b.amount))
  }

  return {
    getInstallments,
    handleCheck
  }
}