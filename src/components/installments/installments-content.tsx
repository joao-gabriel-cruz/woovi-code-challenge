import { CardContent } from "@mui/material"
import React, { cloneElement } from "react"

interface InstallmentsContentProps {
  children: any
  amount_installments?: number
  isCheck?: boolean
}

const handleTypeInstallmentsStyle = (isCheck?: boolean) => {
  let defaultStyle: any = {}

  if (isCheck) {
    defaultStyle = {
      width: '100%',
      height: '0',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }
  }
  else {
    defaultStyle = { width: '100%', display: "flex", padding: '0.2rem 0.5rem' }
  }

  return defaultStyle
}

export const InstallmentsContent = (props: InstallmentsContentProps) => {
  const { children, amount_installments, isCheck } = props


  const NewChildren = React.Children.map(children, (child) => {
    return cloneElement(child, {
      amount_installments
    })
  })

  return (
    <CardContent
      style={handleTypeInstallmentsStyle(isCheck)}
    >
      {NewChildren}
    </CardContent>
  )
}