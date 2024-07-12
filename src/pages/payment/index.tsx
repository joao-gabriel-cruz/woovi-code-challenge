import { useContext } from "react"
import { CommonPage } from "../../components/common/common-page"
import { PaymentContext } from "../../context/payment-context"
import { BoxDivider, BoxIdentifier, BoxInstallments, BoxTitleTerm, DateTerm, Divider, FeesText, Identifier, TextIdentifier, TitleTerm, TotalValueText, WhatIsText } from "../qr-code/qr-code.styled"

import { InstallmentService } from "../../components/installments/installments.service"
import { format_money } from "../../utils"
import { ConnectInstallments } from "../../components/connect-installments"
import { KeyboardArrowUpOutlined } from "@mui/icons-material"


export const Payment = () => {
  const { selectedInstallment, identifier, payment_value } = useContext(PaymentContext)

  const { discount, fees } = selectedInstallment[selectedInstallment.length - 1]

  const { countFeesAndDiscount } = InstallmentService()

  return (
    <CommonPage
      title='João, pague o restante em 1x no cartão'
    >
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
    </CommonPage>
  )
}