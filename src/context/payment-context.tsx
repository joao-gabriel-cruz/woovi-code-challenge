import React, { createContext, useState } from "react";
import { Installment } from "../@types/installments";

export const PaymentContext = createContext<PaymentContextData>({} as PaymentContextData);

export type PaymentContextData = {
  selectedInstallment: Installment
  setSelectedInstallment: (installment: Installment) => void
  page: number
  setPage: (page: number) => void
}

interface PaymentProviderProps {
  children: React.ReactNode
}

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const [selectedInstallment, setSelectedInstallment] = useState({} as Installment)
  const [page, setPage] = useState(1)


  return (
    <PaymentContext.Provider value={{ selectedInstallment, page, setPage, setSelectedInstallment }}>
      {children}
    </PaymentContext.Provider>
  )
}



