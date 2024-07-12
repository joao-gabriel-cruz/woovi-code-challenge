/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { Installment } from "../@types/installments";

export const PaymentContext = createContext<PaymentContextData>({} as PaymentContextData);

export type PaymentContextData = {
  selectedInstallment: Installment[]
  setSelectedInstallment: (installment: Installment[]) => void
  page: number
  setPage: (page: number) => void
  payment_value: number
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


  return (
    <PaymentContext.Provider value={{
      selectedInstallment,
      page,
      setPage,
      setSelectedInstallment,
      payment_value,
      identifier,
      setIdentifier
    }}>
      {children}
    </PaymentContext.Provider>
  )
}



