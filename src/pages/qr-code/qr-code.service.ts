interface QRCodeServiceProps {
  qrCode: any
  setQRcode: any
  setIdentifier: any
}

export const QRCodeService = (props: QRCodeServiceProps) => {
  const { setQRcode, setIdentifier } = props

  const getQrCode = (value: string) => {
    const response = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${value}`
    setQRcode(response)
  }

  const getUUID = async () => {
    const data = await fetch('https://www.uuidgenerator.net/api/version4')
    setIdentifier(await data.text())
  }

  return {
    getQrCode,
    getUUID
  }
}