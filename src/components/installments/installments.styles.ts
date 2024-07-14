import { Card, CardProps, styled } from "@mui/material"

interface CardStyledProps extends CardProps {
  amount_installments: number
  checked: boolean
  onClick?: () => void
}

const handleTypeInstallmentsStyle = (amount_installments: number, checked: boolean, theme: any) => {
  let style = {} as any
  switch (amount_installments) {
    case 1:
      style['marginBottom'] = 20
      style['borderRadius'] = 10

      break;
    case 2:
      style['borderTopLeftRadius'] = 10
      style['borderTopRightRadius'] = 10
      style['borderBottomLeftRadius'] = 0
      style['borderBottomRightRadius'] = 0

      break;
    case 7:
      style['borderTopLeftRadius'] = 0
      style['borderTopRightRadius'] = 0
      style['borderBottomLeftRadius'] = 10
      style['borderBottomRightRadius'] = 10
      style['borderTopWidth'] = 0
      break;
    default:
      style['borderTopWidth'] = 0
      style['borderRadius'] = 0
      break;

  }

  if (checked) {
    style['borderColor'] = theme.palette.primary.main
    style['backgroundColor'] = theme.palette.primary.main + '10'
    style['borderWidth'] = 2
  }

  return style
}


export const InstallmentsRootContainer = styled(Card) <CardStyledProps>`
  width: 100%;
  padding: 0.5rem;
  ${({ amount_installments, checked, theme }) => handleTypeInstallmentsStyle(amount_installments, checked, theme)}
`;

