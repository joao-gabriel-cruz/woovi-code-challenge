import { InstallmentRequest } from "../@types/installments";

export const installments_request: InstallmentRequest[] = [
  {
    type_installment: 'Pix',
    id: Math.random(),
    amount: 1,
    fees: 0,
    discount: 0.03,
    message_promotion: 'Ganhe 3% de Cashback',
    message: '🤑 R$ 300,00 de volta no seu Pix na hora'
  },
  {
    type_installment: 'Pix Parcelado',
    id: Math.random(),
    amount: 2,
    fees: 0.2,
    discount: 0,
  },
  {
    id: Math.random(),
    amount: 3,
    fees: 0.3,
    discount: 0,
  },
  {
    id: Math.random(),
    amount: 4,
    fees: 0.4,
    discount: 0.3,
    message: '-3% de juros: Melhor opção de parcelamento'
  },
  {
    id: Math.random(),
    amount: 5,
    fees: 0.5,
    discount: 0,
  },
  {
    id: Math.random(),
    amount: 6,
    fees: 0.6,
    discount: 0,
  },
  {
    id: Math.random(),
    amount: 7,
    fees: 0.7,
    discount: 0,
  }
]