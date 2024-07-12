import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import styles from './home.module.css'
import { Installments } from '../../components/installments';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { HomeService } from './home.service';
import { Installment } from '../../@types/installments';
import { useEffect, useState } from 'react';
import { CommonPage } from '../../components/common/common-page';


export const Home = () => {
  const [installments, setInstallments] = useState([] as Installment[])
  const value = 30000

  const { getInstallments, handleCheck } = HomeService({ setInstallments, installments })

  useEffect(() => {
    getInstallments()
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
                <Installments.Text item={item} value={value} type="installments" />
                <Installments.Text item={item} value={value} type="installments-text" />
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
                <Installments.Text item={item} value={value} type="total-value" />
              </Installments.Content>
              {item?.message_promotion ? <Installments.Text item={item} value={value} type="installments-promotion" /> : <></>}
              <Installments.Promotion text={item.message} />
            </Installments.Root>
          ))
        }
      </section>
    </CommonPage>
  )
}