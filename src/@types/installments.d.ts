export type InstallmentRequest = {
  id: number
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
  amount: number
  fees?: number
  discount: number
  message?: string
  message_promotion?: string
  checked: boolean
}