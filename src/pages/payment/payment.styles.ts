import { styled } from "@mui/material";

export const FormContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormDivider = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

export const ButtonPayment = styled('button')`
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem;

`

export const ConfirmationPayment = styled('div')`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
`