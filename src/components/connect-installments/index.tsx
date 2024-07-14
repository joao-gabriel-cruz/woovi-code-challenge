import { useContext, useEffect, useState } from "react"
import { Installment } from "../../@types/installments"
import { PaymentContext } from "../../context/payment-context"
import { ConnectInstallmentsBar, ConnectInstallmentsBox, ConnectInstallmentsBoxLabel, ConnectInstallmentsContainer, ConnectInstallmentsContainerRadios, ConnectInstallmentsContainerRadiosLabel, ConnectInstallmentsLabel, ConnectInstallmentsRadios, ConnectInstallmentsTotal } from "./connect-installments.styled"
import { CheckOutlined } from "@mui/icons-material"

type InstallmentType = Installment & { type?: "next-payment" | "paidOut" | "opened" }

interface ConnectInstallmentsProps {
  installments: InstallmentType[]
}

export const ConnectInstallments = (props: ConnectInstallmentsProps) => {
  const { installments } = props
  const { payment_value_formatted, page } = useContext(PaymentContext)
  const [newInstallments, setNewInstallments] = useState<InstallmentType[]>(installments)

  useEffect(() => {
    setNewInstallments(installments)
  }, [installments])

  const handleInstallment = (amount_installment: number) => {
    switch (amount_installment) {
      case 1:
        return "1 Primeira parcela no Pix"
      default:
        return amount_installment + "ª no Cartão"
    }
  }

  const handleType = () => {
    const result = installments.map((item, index) => {
      if (item.paidOut && installments.length > 1) {
        item.type = "paidOut"
      } else if (!item.paidOut) {
        if (installments[index - 1]?.paidOut || index === 0) {
          item.type = "next-payment"
        } else {
          item.type = "opened"
        }
      }
      return item
    })

    setNewInstallments(result)
  }

  useEffect(() => {
    handleType()
  }, [page])

  return (
    <ConnectInstallmentsContainer>
      {
        newInstallments.map((item, index) => (
          <>
            <ConnectInstallmentsBox
              key={item.amount}
            >
              {index | 0 ? <ConnectInstallmentsBar /> : <></>}
              <ConnectInstallmentsContainerRadios >
                <ConnectInstallmentsContainerRadiosLabel>
                  <ConnectInstallmentsRadios
                    type={item.type || "opened"}
                  >
                    {
                      item.type === "paidOut" && <CheckOutlined
                        style={{
                          color: "#fff",
                          fontSize: "1rem"
                        }}
                      />
                    }
                  </ConnectInstallmentsRadios>
                  <ConnectInstallmentsBoxLabel>
                    <ConnectInstallmentsLabel>
                      {handleInstallment(item.amount)}
                    </ConnectInstallmentsLabel>
                  </ConnectInstallmentsBoxLabel>
                </ConnectInstallmentsContainerRadiosLabel>
                <ConnectInstallmentsTotal>
                  {payment_value_formatted}
                </ConnectInstallmentsTotal>
              </ConnectInstallmentsContainerRadios>
            </ConnectInstallmentsBox>
          </>
        ))
      }
    </ConnectInstallmentsContainer>
  )
}