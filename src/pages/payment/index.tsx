import { useContext, useState } from "react"
import { CommonPage } from "../../components/common/common-page"
import { PaymentContext } from "../../context/payment-context"
import {
  BoxDivider,
  BoxIdentifier,
  BoxInstallments,
  BoxTitleTerm,
  DateTerm,
  Divider,
  FeesText,
  Identifier,
  TextIdentifier,
  TitleTerm,
  TotalValueText,
  WhatIsText
} from "../qr-code/qr-code.styled"

import { InstallmentService } from "../../components/installments/installments.service"
import { format_money, mask } from "../../utils"
import { ConnectInstallments } from "../../components/connect-installments"
import { KeyboardArrowUpOutlined } from "@mui/icons-material"
import { ButtonPayment, FormContainer, FormDivider } from "./payment.styles"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"


export const Payment = () => {
  const { selectedInstallment, identifier, payment_value, setPage } = useContext(PaymentContext)

  const [formDate, setFormDate] = useState({
    name: '',
    cpf: '',
    card_name: '',
    card_date: '',
    card_cvv: ''
  })

  const { discount, fees } = selectedInstallment[selectedInstallment.length - 1]

  const { countFeesAndDiscount } = InstallmentService()

  return (
    <CommonPage
      title='João, pague o restante em 1x no cartão'
    >
      <FormContainer>
        <TextField
          sx={{ width: '100%', marginBottom: '1rem' }}
          variant='outlined'
          type='text'
          onChange={(e) => setFormDate({ ...formDate, name: e.target.value })}
          label='Nome completo'
          placeholder='Ex: João da Silva'
        />
        <TextField
          sx={{ width: '100%', marginBottom: '1rem' }}
          variant='outlined'
          type='text'
          label='CPF'
          onChange={(e) => setFormDate({
            ...formDate, cpf: mask({
              value: e.target.value,
              mask: "cpf"
            })
          })}
          placeholder='Ex: 000.000.000-00'
        />

        <TextField
          sx={{ width: '100%', marginBottom: '1rem' }}
          variant='outlined'
          type='text'
          label='Nome do cartão'
          onChange={(e) => setFormDate({
            ...formDate, cpf: mask({
              value: e.target.value,
              mask: "cpf"
            })
          })}
          placeholder='Ex: 000.000.000-00'
        />
        <FormDivider>
          <TextField
            sx={{ width: '49%', marginBottom: '1rem' }}
            variant='outlined'
            type='text'
            label='Vencimento'
            placeholder='Ex: 00/00'
          />
          <TextField
            sx={{ width: '49%', marginBottom: '1rem' }}
            variant='outlined'
            type='text'
            label='CVV'
            placeholder='Ex: 000'
          />
        </FormDivider>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Parcelas
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Parcelas"
            defaultValue={format_money(countFeesAndDiscount(payment_value, fees, discount))}
            onChange={() => { }}
          >
            {
              selectedInstallment.map((item) => (
                <MenuItem key={item.id} value={format_money(countFeesAndDiscount(payment_value, fees, discount) / item.amount)}>
                  {item.amount}x de {format_money(countFeesAndDiscount(payment_value, fees, discount) / item.amount)}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <ButtonPayment>
          Pagar
        </ButtonPayment>
      </FormContainer>
      <BoxTitleTerm>
        <TitleTerm>
          Prazo de pagamento:
        </TitleTerm>
        <DateTerm>
          15/12/2021 - 08:17
        </DateTerm>
      </BoxTitleTerm>
      <BoxInstallments>
        <ConnectInstallments
          installments={selectedInstallment}
        />
      </BoxInstallments>
      <Divider />
      <BoxDivider>
        <FeesText>
          CET: 0,5%
        </FeesText>
        <TotalValueText>
          Total: {format_money(countFeesAndDiscount(payment_value, fees, discount))}
        </TotalValueText>
      </BoxDivider>
      <Divider />
      <BoxDivider>
        <WhatIsText>
          Como funciona?
        </WhatIsText>
        <KeyboardArrowUpOutlined />
      </BoxDivider>
      <Divider />
      <BoxIdentifier>
        <TextIdentifier>
          Identificador:
        </TextIdentifier>
        <Identifier>
          {identifier}
        </Identifier>
      </BoxIdentifier>
      <Button
        variant='outlined'
        sx={{
          w: '49%'
        }}
        onClick={() => setPage(1)}
      >
        <Typography
          variant='button'
        >
          Voltar
        </Typography>
      </Button>
    </CommonPage>
  )
}