import React, { cloneElement } from "react"
import { InstallmentsRootContainer } from "./installments.styles"

export interface InstallmentsRootProps {
  children: any
  amount_installments: number
  checked: boolean
  onClick?: () => void
}


export const InstallmentsRoot = (props: InstallmentsRootProps) => {
  const { children, amount_installments, checked, onClick } = props

  const NewChildren = React.Children.map(children, (child) => {
    return cloneElement(child, {
      amount_installments
    })
  })

  return (
    <InstallmentsRootContainer
      checked={checked}
      onClick={onClick}
      amount_installments={amount_installments}
      variant="outlined"
    >
      {NewChildren}
    </InstallmentsRootContainer >
  )
}