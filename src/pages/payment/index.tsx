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

import { countFeesAndDiscount, format_money, mask } from "../../utils"
import { ConnectInstallments } from "../../components/connect-installments"
import { KeyboardArrowLeft, KeyboardArrowUpOutlined } from "@mui/icons-material"
import { ButtonPayment, FormContainer, FormDivider } from "./payment.styles"
import { Fab, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { installments_request } from "../../fake/instalments"


export const Payment = () => {
  const { selectedInstallment, identifier, payment_value, setPage } = useContext(PaymentContext)

  const [formDate, setFormDate] = useState({
    name: '',
    cpf: '',
    card_number: '',
    card_date: '',
    card_cvv: ''
  })

  const { discount, fees, amount } = selectedInstallment[selectedInstallment.length - 1]
  const new_value_installment = payment_value - (payment_value / amount)

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
          value={formDate.name}
          placeholder='Ex: João da Silva'
        />
        <TextField
          sx={{ width: '100%', marginBottom: '1rem' }}
          variant='outlined'
          type='text'
          label='CPF'
          value={formDate.cpf}
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
          label='Numero do cartão'
          value={formDate.card_number}
          onChange={(e) => setFormDate({
            ...formDate, card_number: mask({
              value: e.target.value,
              mask: "credit-card"
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
            value={formDate.card_date}
            onChange={(e) => setFormDate({
              ...formDate, card_date: mask({
                value: e.target.value,
                mask: "validate-card"
              })
            })
            }
            placeholder='Ex: 00/00'
          />
          <TextField
            sx={{ width: '49%', marginBottom: '1rem' }}
            variant='outlined'
            type='text'
            label='CVV'
            placeholder='Ex: 000'
            value={formDate.card_cvv}
            onChange={(e) => setFormDate({
              ...formDate, card_cvv: mask({
                value: e.target.value,
                mask: "cvv"
              })
            })
            }

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
            defaultValue={selectedInstallment[0].amount}
          >

            <MenuItem key={installments_request[0].id} value={installments_request[0].amount}>
              {installments_request[0].amount}x de {format_money(countFeesAndDiscount(new_value_installment, fees, discount) / installments_request[0].amount)}
            </MenuItem>
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
          installments={selectedInstallment as any}
        />
      </BoxInstallments>
      <Divider />
      <BoxDivider>
        <FeesText>
          CET: 0,5%
        </FeesText>
        <TotalValueText>
          Total: {format_money(countFeesAndDiscount(new_value_installment, fees, discount))}
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
      <Fab
        color='primary'
        onClick={() => setPage(2)}
        size="small"
        sx={{ position: 'fixed', bottom: 20, left: 20 }}
      >
        <KeyboardArrowLeft
          sx={{
            color: 'white',
            fontSize: 20
          }}
        />
      </Fab>
    </CommonPage>
  )
}