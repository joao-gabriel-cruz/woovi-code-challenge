import { styled } from "@mui/material"
import React, { cloneElement } from "react"

export interface InstallmentsContentProps {
  children: any
  amount_installments?: number
  isCheck?: boolean
}
interface CardContentStyledProps {
  isCheck?: boolean
}

export const CardContentStyled = styled('div') <CardContentStyledProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
`

export const InstallmentsContent = (props: InstallmentsContentProps) => {
  const { children, amount_installments } = props


  const NewChildren = React.Children.map(children, (child) => {
    return cloneElement(child, {
      amount_installments
    })
  })

  return (
    <CardContentStyled>
      {NewChildren}
    </CardContentStyled>
  )
}