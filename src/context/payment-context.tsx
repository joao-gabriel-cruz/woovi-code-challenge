/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { Installment } from "../@types/installments";
import { countFeesAndDiscount, format_money } from "../utils";

export const PaymentContext = createContext<PaymentContextData>({} as PaymentContextData);

export type PaymentContextData = {
  selectedInstallment: Installment[]
  setSelectedInstallment: (installment: Installment[]) => void
  page: number
  setPage: (page: number) => void
  payment_value: number
  payment_value_formatted: string
  identifier: string
  setIdentifier: (identifier: string) => void
}

interface PaymentProviderProps {
  children: React.ReactNode
}

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const [selectedInstallment, setSelectedInstallment] = useState([] as Installment[])
  const [identifier, setIdentifier] = useState('' as string)
  const [page, setPage] = useState(1)
  const payment_value = 30800

  const [payment_value_formatted, setPaymentValueFormatted] = useState('')

  useEffect(() => {
    if (selectedInstallment.length === 0) return
    const { discount, fees, amount } = selectedInstallment[selectedInstallment.length - 1]
    const valeu = format_money(countFeesAndDiscount(payment_value, fees, discount) / amount)
    setPaymentValueFormatted(valeu)
  }, [selectedInstallment])


  return (
    <PaymentContext.Provider value={{
      selectedInstallment,
      page,
      setPage,
      setSelectedInstallment,
      payment_value,
      identifier,
      setIdentifier,
      payment_value_formatted
    }}>
      {children}
    </PaymentContext.Provider>
  )
}



