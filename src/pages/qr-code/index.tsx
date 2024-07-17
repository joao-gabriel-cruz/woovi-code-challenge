import { useContext, useEffect } from "react"
import { CommonPage } from "../../components/common/common-page"
import { PaymentContext } from "../../context/payment-context"
import { BoxDivider, BoxIdentifier, BoxImage, BoxInstallments, BoxTitleTerm, CopyButton, CopyButtonIcon, CopyButtonTitle, DateTerm, Divider, FeesText, Identifier, QRCodeImage, TextIdentifier, TitleTerm, TotalValueText, WhatIsText } from "./qr-code.styled"
import { Fab } from "@mui/material"
import { countFeesAndDiscount, format_money } from "../../utils"
import { ConnectInstallments } from "../../components/connect-installments"
import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUpOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"


export const QRCode = () => {
  const { selectedInstallment, payment_value, identifier, setSelectedInstallment } = useContext(PaymentContext)
  const { amount, discount, fees } = selectedInstallment[selectedInstallment.length - 1]


  const navigate = useNavigate()

  const navigation = (page: "/" | "/payment-rest") => {
    const newInstallment = [...selectedInstallment]
    newInstallment[0].paidOut = page === "/payment-rest"
    setSelectedInstallment(newInstallment)
    navigate(page)
  }

  useEffect(() => {
    const newInstallment = [...selectedInstallment]
    newInstallment[0].paidOut = false
    setSelectedInstallment(newInstallment)
  }, [])



  return (
    <CommonPage
      title={`João, pague a entrada de ${format_money(countFeesAndDiscount(payment_value, fees, discount) / amount)} pelo Pix`}
    >
      <BoxImage>
        <QRCodeImage
          loading="eager"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${format_money(countFeesAndDiscount(payment_value, fees, discount) / amount)}`} alt="QRCode" />
      </BoxImage>
      <CopyButton>
        <CopyButtonTitle
          onClick={() => navigator.clipboard.writeText(format_money(countFeesAndDiscount(payment_value, fees, discount) / amount))}
        >
          Clique para copiar QR CODE
        </CopyButtonTitle>
        <CopyButtonIcon
          src="copy-icon.png"
        />
      </CopyButton>
      <BoxTitleTerm>
        <TitleTerm>
          Prazo de pagamento:
        </TitleTerm>
        <DateTerm>
          15/12/2021 - 08:17
        </DateTerm>
      </BoxTitleTerm>
      <BoxInstallments>
        <ConnectInstallments
          installments={selectedInstallment as any}
        />
      </BoxInstallments>
      <Divider />
      <BoxDivider>
        <FeesText>
          CET: 0,5%
        </FeesText>
        <TotalValueText>
          Total: {format_money(countFeesAndDiscount(payment_value, fees, discount))}
        </TotalValueText>
      </BoxDivider>
      <Divider />
      <BoxDivider>
        <WhatIsText>
          Como funciona?
        </WhatIsText>
        <KeyboardArrowUpOutlined />
      </BoxDivider>
      <Divider />
      <BoxIdentifier>
        <TextIdentifier>
          Identificador:
        </TextIdentifier>
        <Identifier>
          {identifier}
        </Identifier>
      </BoxIdentifier>
      <Fab
        color='primary'
        onClick={() => navigation("/")}
        size="small"
        sx={{ position: 'fixed', bottom: 20, left: 20 }}
      >
        <KeyboardArrowLeft
          sx={{
            color: 'white',
            fontSize: 20
          }}
        />
      </Fab>
      {selectedInstallment.length > 1 &&
        < Fab
          onClick={() => navigation("/payment-rest")}
          color='primary'
          size="small"
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
        >
          <KeyboardArrowRight
            sx={{
              color: 'white',
              fontSize: 20
            }}
          />
        </Fab>}
    </CommonPage >
  )
}