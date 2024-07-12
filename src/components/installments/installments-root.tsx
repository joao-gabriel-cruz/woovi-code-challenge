import { Card } from "@mui/material"
import React, { cloneElement } from "react"
import { theme } from "../../styles/theme"

interface InstallmentsRootProps {
  children: any
  amount_installments: number
  checked: boolean
  onClick?: () => void
}


export const InstallmentsRoot = (props: InstallmentsRootProps) => {
  const { children, amount_installments, checked, onClick } = props
  let style: any = { width: '100%', padding: '0.5rem' }

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

  const NewChildren = React.Children.map(children, (child) => {
    return cloneElement(child, {
      amount_installments
    })
  })

  return (
    <Card
      onClick={onClick}
      variant="outlined"
      style={{ ...style }}
    >
      {NewChildren}
    </Card >
  )
}