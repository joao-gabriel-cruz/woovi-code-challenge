import { Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import styles from './home.module.css'
import { Installments } from '../../components/installments';
import { CheckCircle, NavigateNext, RadioButtonUnchecked } from '@mui/icons-material';
import { HomeService } from './home.service';
import { Installment } from '../../@types/installments';
import { useContext, useEffect, useState } from 'react';
import { CommonPage } from '../../components/common/common-page';
import { PaymentContext } from '../../context/payment-context';


export const Home = () => {
  const { setSelectedInstallment, payment_value, selectedInstallment, setPage } = useContext(PaymentContext)
  const [installments, setInstallments] = useState([] as Installment[])



  const { getInstallments, handleCheck } = HomeService({
    setInstallments,
    installments,
    setSelectedInstallment,
    selectedInstallment
  })

  useEffect(() => {
    getInstallments()
    // verifyInstallments()
  }, [])

  return (
    <CommonPage
      title='João como você quer pagar?'
    >
      <section
        className={styles.installments}
      >
        {
          installments.map((item) => (
            <Installments.Root
              onClick={() => handleCheck(item)}
              key={item.id}
              checked={item.checked}
              amount_installments={item.amount}>
              <Installments.Label text={item.type} />
              <Installments.Content>
                <Installments.Text item={item} value={payment_value} type="installments" />
                <Installments.Text item={item} value={payment_value} type="installments-text" />
                <Installments.Content
                  isCheck
                >
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={item.checked}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />}
                      label=""
                    />
                  </FormGroup>
                </Installments.Content>
              </Installments.Content>
              <Installments.Content>
                <Installments.Text item={item} value={payment_value} type="total-value" />
              </Installments.Content>
              {item?.message_promotion ? <Installments.Text item={item} value={payment_value} type="installments-promotion" /> : <></>}
              <Installments.Promotion text={item.message} />
            </Installments.Root>
          ))
        }
        {
          selectedInstallment?.length ? <Button
            onClick={() => setPage(2)}
            variant="contained"
            color="primary"
            sx={{
              width: '100%',
              mt: 2,
            }}
            endIcon={
              <NavigateNext
                sx={{
                  color: 'white',
                  fontSize: 30
                }}
              />
            }
          >
            <Typography variant="button" color="white">Continuar</Typography>
          </Button> : <></>
        }
      </section>
    </CommonPage>
  )
}