export const format_money = (value: number) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

interface MaskProps {
  value: string
  mask: "cpf" | "phone" | "cep" | "cnpj" | "credit-card" | "validate-card" | "cvv"
}


export const mask = ({ mask, value }: MaskProps) => {
  switch (mask) {
    case 'cpf':
      // max length 14
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4').slice(0, 14)
    case 'phone':
      return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3').split('').slice(0, 15).join('')
    case 'cep':
      return value.replace(/(\d{5})(\d{3})/, '$1-$2').slice(0, 9)
    case 'cnpj':
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
    case 'credit-card':
      return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4').split('').slice(0, 19).join('')
    case 'validate-card':
      return value.replace(/(\d{2})(\d{2})/, '$1/$2').split('').slice(0, 5).join('')
    case 'cvv':
      return value.slice(0, 3)
    default:
      return value
  }

}

export const countFeesAndDiscount = (value: number, fees?: number, discount?: number) => {
  let result = 0
  if (fees) {
    result = value + (value * fees)
  }

  if (discount) {
    result = value - (value * discount)
  }

  if (fees && discount) {
    result = value + (value * fees) - (value * discount)
  }

  return result
}