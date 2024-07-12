export const format_money = (value: number) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

interface MaskProps {
  value: string
  mask: "cpf" | "phone" | "cep" | "cnpj" | "credit-card"
}


export const mask = ({ mask, value }: MaskProps) => {
  switch (mask) {
    case 'cpf':
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    case 'phone':
      return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    case 'cep':
      return value.replace(/(\d{5})(\d{3})/, '$1-$2')
    case 'cnpj':
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
    case 'credit-card':
      return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
    default:
      return value
  }

}