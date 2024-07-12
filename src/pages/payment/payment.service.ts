import { Installment } from "../../@types/installments"

export const PaymentService = () => {
  const getInstallments = () => {
    const localStorageData: Installment = JSON.parse(localStorage.getItem('installment') || '{}')
    return localStorageData
  }

  const getQrCode = () => {
    const
    const data = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example')
    const response = await data.json()
    return response
  }
}