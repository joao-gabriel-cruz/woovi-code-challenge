import { styled } from "@mui/material"
import React, { cloneElement } from "react"

export interface InstallmentsBoxProps {
  children: any
  amount_installments?: number
}

export const InstallmentsBoxContainer = styled('section')`
    display: flex;
`

export const InstallmentsBox = (props: InstallmentsBoxProps) => {
  const { children, amount_installments } = props

  const NewChildren = React.Children.map(children, (child) => {
    return cloneElement(child, {
      amount_installments
    })
  })

  return (
    <InstallmentsBoxContainer>
      {NewChildren}
    </InstallmentsBoxContainer>
  )
}