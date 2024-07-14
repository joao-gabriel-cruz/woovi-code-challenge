export type InstallmentRequest = {
  id: number
  type_installment?: string
  type?: string
  amount: number
  fees?: number
  discount: number
  message?: string
  message_promotion?: string
}

export type Installment = {
  id: number
  type?: string
  type_installment?: string
  amount: number
  fees?: number
  discount: number
  message?: string
  message_promotion?: string
  checked: boolean
  paidOut: boolean
}