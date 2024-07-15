interface QRCodeServiceProps {
  setIdentifier: any
}

export const QRCodeService = (props: QRCodeServiceProps) => {
  const { setIdentifier } = props

  const getUUID = async () => {
    const identifier = localStorage.getItem('identifier')
    if (identifier) {
      setIdentifier(identifier)
      return
    }
    const data = await fetch('https://www.uuidgenerator.net/api/version4')
    localStorage.setItem('identifier', await data.text())
    setIdentifier(await data.text())
  }

  return {
    getUUID
  }
}