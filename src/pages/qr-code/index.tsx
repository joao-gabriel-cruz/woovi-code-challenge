import { useContext, useEffect, useState } from "react"
import { CommonPage } from "../../components/common/common-page"
import { PaymentContext } from "../../context/payment-context"
import { QRCodeService } from "./qr-code.service"
import { BoxDivider, BoxIdentifier, BoxImage, BoxInstallments, BoxNavButtons, BoxTitleTerm, CopyButton, CopyButtonIcon, CopyButtonTitle, DateTerm, Divider, FeesText, Identifier, QRCodeImage, TextIdentifier, TitleTerm, TotalValueText, WhatIsText } from "./qr-code.styled"
import { Button, Typography } from "@mui/material"
import { InstallmentService } from "../../components/installments/installments.service"
import { format_money } from "../../utils"
import { ConnectInstallments } from "../../components/connect-installments"
import { KeyboardArrowUpOutlined } from "@mui/icons-material"


export const QRCode = () => {
  const { selectedInstallment, payment_value, setPage, identifier, setIdentifier } = useContext(PaymentContext)
  const [qrCode, setQRcode] = useState('' as string)
  const { amount, discount, fees } = selectedInstallment[selectedInstallment.length - 1]


  const { countFeesAndDiscount } = InstallmentService()

  const { getQrCode, getUUID } = QRCodeService({
    setQRcode,
    qrCode,
    setIdentifier
  })

  useEffect(() => {
    getQrCode(format_money(countFeesAndDiscount(payment_value, fees, discount) / amount))
    getUUID()
  }, [])


  return (
    <CommonPage
      title={`João, pague a entrada de ${format_money(countFeesAndDiscount(payment_value, fees, discount) / amount)} pelo Pix`}
    >
      <BoxImage>
        <QRCodeImage src={qrCode} alt="QRCode" />
      </BoxImage>
      <CopyButton>
        <CopyButtonTitle
          onClick={() => navigator.clipboard.writeText(format_money(countFeesAndDiscount(payment_value, fees, discount) / amount))}
        >
          Clique para copiar QR CODE
        </CopyButtonTitle>
        <CopyButtonIcon
          src="../../../public/copy-icon.png"
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
          installments={selectedInstallment}
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
      <BoxNavButtons>
        <Button
          variant='outlined'
          sx={{
            w: '49%'
          }}
          onClick={() => setPage(1)}
        >
          <Typography
            variant='button'
          >
            Voltar
          </Typography>
        </Button>
        <Button
          sx={{
            w: '49%'
          }}
          variant='contained'
          onClick={() => setPage(3)}
        >
          <Typography
            color="white"
            variant='button'
          >
            Continuar
          </Typography>
        </Button>
      </BoxNavButtons>
    </CommonPage>
  )
}