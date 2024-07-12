
interface PaymentServiceProps {
  qrCode: any
  setQRcode: any
}

export const PaymentService = (props: PaymentServiceProps) => {
  const { setQRcode } = props

  const getQrCode = async (value: string) => {
    const data = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`)
    const response = data.url
    setQRcode(response)
  }

  return {
    getQrCode
  }
}