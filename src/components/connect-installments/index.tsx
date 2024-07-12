import React, { useContext } from "react"
import { Installment } from "../../@types/installments"
import { styled } from "@mui/material"
import { PaymentContext } from "../../context/payment-context"

interface ConnectInstallmentsProps {
  installments: Installment[]
}

const ConnectInstallmentsContainer = styled('section')`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`
const ConnectInstallmentsBox = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

interface ConnectInstallmentsRadiosProps {
  checked: boolean
}

const ConnectInstallmentsContainerRadios = styled('div') <ConnectInstallmentsRadiosProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: ${({ checked, theme }) => checked ? theme.palette.primary.main : "#fff"}; */
    /* border-color: ${({ theme, checked }) => checked ? theme.palette.primary.main : "#ccc"}; */
    border-radius: 5rem;
    margin-top: 1rem;
    `

const ConnectInstallmentsRadios = styled('div') <ConnectInstallmentsRadiosProps>`
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: ${({ checked, theme }) => checked ? theme.palette.primary.main : "#ccc"}; */
    border-color: ${({ theme, checked }) => checked ? theme.palette.primary.main : "#ccc"};
    border-radius: 5rem;
    border-width: 2px;
    border-style: solid;
`

export const ConnectInstallmentsBar = styled('div')`
    width: 0.15rem;
    height: 1.2rem;
    background-color: #ccc;
    border-radius: 5rem;
    position: absolute;
    margin-top: -1.2rem;
    margin-left: 0.54rem;
`
export const ConnectInstallmentsBoxLabel = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 0.5rem;
`

export const ConnectInstallmentsLabel = styled('span')`
    font-size: 0.8rem;
    font-weight: 600;
    font-family: 'Nunito' sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ConnectInstallmentsContainerRadiosLabel = styled('div')`
  display: flex;
`

export const ConnectInstallmentsTotal = styled('span')`
    font-size: 0.8rem;
    font-weight: 600;
    font-family: 'Nunito' sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
`

export const ConnectInstallments = (props: ConnectInstallmentsProps) => {
  const { installments } = props
  const { payment_value } = useContext(PaymentContext)

  const handleInstallment = (amount_installment: number) => {
    switch (amount_installment) {
      case 1:
        return "1 Primeira parcela no Pix"
      default:
        return amount_installment + "ª no Cartão"

    }
  }

  return (
    <ConnectInstallmentsContainer>
      {
        installments.map((item, index) => (
          <>
            <ConnectInstallmentsBox>
              {index | 0 ? <ConnectInstallmentsBar /> : <></>}
              <ConnectInstallmentsContainerRadios checked={index === 0} >
                <ConnectInstallmentsContainerRadiosLabel>
                  <ConnectInstallmentsRadios
                    checked={index === 0}
                  />
                  <ConnectInstallmentsBoxLabel>
                    <ConnectInstallmentsLabel>
                      {handleInstallment(item.amount)}
                    </ConnectInstallmentsLabel>
                  </ConnectInstallmentsBoxLabel>
                </ConnectInstallmentsContainerRadiosLabel>
                <ConnectInstallmentsTotal>
                  { }
                </ConnectInstallmentsTotal>
              </ConnectInstallmentsContainerRadios>
            </ConnectInstallmentsBox>
          </>
        ))
      }
    </ConnectInstallmentsContainer>
  )
}