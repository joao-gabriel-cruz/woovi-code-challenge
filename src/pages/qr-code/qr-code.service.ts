interface QRCodeServiceProps {
  setIdentifier: any
}

export const QRCodeService = (props: QRCodeServiceProps) => {
  const { setIdentifier } = props

  const getUUID = async () => {
    const data = await fetch('https://www.uuidgenerator.net/api/version4')
    setIdentifier(await data.text())
  }

  return {
    getUUID
  }
}