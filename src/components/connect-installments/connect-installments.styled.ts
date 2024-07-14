import { styled } from "@mui/material"

export const ConnectInstallmentsContainer = styled('section')`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const ConnectInstallmentsBox = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

interface ConnectInstallmentsRadiosProps {
  type: "next-payment" | "paidOut" | "opened"
}

const handleTypeInstallmentsStyle = (type: "next-payment" | "paidOut" | "opened", theme: any) => {
  switch (type) {
    case "paidOut":
      return {
        padding: "0rem",
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      }
    case "next-payment":
      return {
        padding: "0.5rem",
        backgroundColor: "#fff",
        borderColor: theme.palette.primary.main,
      }
    case "opened":
      return {
        padding: "0.5rem",
        backgroundColor: "#fff",
        borderColor: "#ccc",
      }
  }
}

export const ConnectInstallmentsContainerRadios = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    border-radius: 5rem;
    margin-top: 1rem;
    `

export const ConnectInstallmentsRadios = styled('div') <ConnectInstallmentsRadiosProps>`
   ${({ type, theme }) => handleTypeInstallmentsStyle(type, theme)}; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    border-width: 2px;
    border-style: solid;
`

export const ConnectInstallmentsBar = styled('div')`
    width: 0.15rem;
    height: 1.8rem;
    background-color: #ccc;
    border-radius: 5rem;
    position: absolute;
    margin-top: -1.2rem;
    margin-left: 0.54rem;
`
export const ConnectInstallmentsBoxLabel = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 0.5rem;
`

export const ConnectInstallmentsLabel = styled('span')`
    font-size: 0.8rem;
    font-weight: 600;
    font-family: 'Nunito' sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ConnectInstallmentsContainerRadiosLabel = styled('div')`
  display: flex;
`

export const ConnectInstallmentsTotal = styled('span')`
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Nunito' sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
`