import { styled } from "@mui/material";

export const BoxImage = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 1rem;
`
export const QRCodeImage = styled('img')`
  width: 100%;
  max-width: 300px;
`

export const CopyButton = styled('button')`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`

export const CopyButtonTitle = styled('span')`
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Nunito' sans-serif;
`

export const CopyButtonIcon = styled('img')`
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxTitleTerm = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const TitleTerm = styled('h1')`
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Nunito' sans-serif;
  color: ${({ theme }) => theme.palette.grey[600]};
`

export const DateTerm = styled('span')`
  font-size: 1rem;
  font-weight: 800;
  font-family: 'Nunito' sans-serif;
  color: ${({ theme }) => theme.palette.grey[800]};
`


export const BoxInstallments = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const BoxNavButtons = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export const Divider = styled('div')`
  width: 100%;
  height: 0.15rem;
  background-color: #ccc;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const BoxDivider = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export const TotalValueText = styled('span')`
font-size: 1rem;
font-weight: 700;
font-family: 'Nunito' sans-serif;
color: ${({ theme }) => theme.palette.grey[600]};
`
export const FeesText = styled('span')`
font-size: 0.8rem;
font-weight: 600;
font-family: 'Nunito' sans-serif;
color: ${({ theme }) => theme.palette.grey[600]};
`

export const WhatIsText = styled('p')`
  font-size: 0.8rem;
  font-weight: 800;
  font-family: 'Nunito' sans-serif;
  color: ${({ theme }) => theme.palette.grey[800]};
`

export const BoxIdentifier = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const TextIdentifier = styled('span')`
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Nunito' sans-serif;
  color: ${({ theme }) => theme.palette.grey[500]};
`

export const Identifier = styled('span')`
  font-size: 0.8rem;
  font-weight: 800;
  font-family: 'Nunito' sans-serif;
  color: ${({ theme }) => theme.palette.grey[800]};
`