import { Checkbox, FormControlLabel, FormGroup, Skeleton } from '@mui/material';
import { Installments } from '../../components/installments';
import { CheckCircle, KeyboardArrowRight, RadioButtonUnchecked } from '@mui/icons-material';
import { HomeService } from './home.service';
import { Installment } from '../../@types/installments';
import { useContext, useEffect, useState } from 'react';
import { CommonPage } from '../../components/common/common-page';
import { PaymentContext } from '../../context/payment-context';
import { Fab } from '@mui/material';
import { ContainerInstallments, ContainerSkeleton } from './home.styles';

export const Home = () => {
  const { setSelectedInstallment, payment_value, selectedInstallment, setPage } = useContext(PaymentContext)
  const [installments, setInstallments] = useState([] as Installment[])



  const { getInstallments, handleCheck, verifyInstallments } = HomeService({
    setInstallments,
    installments,
    setSelectedInstallment,
    selectedInstallment
  })

  useEffect(() => {
    getInstallments()
    verifyInstallments()
  }, [])




  return (
    <CommonPage
      title='João como você quer pagar?'
    >
      <ContainerInstallments>
        {
          installments.length === 0 ?
            <ContainerSkeleton>
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100px"
                sx={{ borderRadius: 2, mt: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100px"

                sx={{ borderRadius: 2, mt: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100px"
                sx={{ borderRadius: 2, mt: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100px"
                sx={{ borderRadius: 2, mt: 2 }}
              />

            </ContainerSkeleton>
            :
            installments.map((item) => (
              <Installments.Root
                onClick={() => handleCheck(item)}
                key={item.id}
                checked={item.checked}
                amount_installments={item.amount}>
                <Installments.Label text={item.type_installment} />
                <Installments.Content>

                  <Installments.Box>
                    <Installments.Text item={item} value={payment_value} type="installments" />
                    <Installments.Text item={item} value={payment_value} type="installments-text" />
                  </Installments.Box>
                  <Installments.Box>
                    <FormGroup
                      sx={{ width: "1.2rem" }}
                    >
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
                  </Installments.Box>
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
          selectedInstallment?.length ? <Fab
            color='primary'
            onClick={() => {
              setPage(2)
            }}
            size='small'
            sx={{ position: 'fixed', bottom: 20, right: 20 }}
          >
            <KeyboardArrowRight
              sx={{
                color: 'white',
                fontSize: 20
              }}
            />
          </Fab> : <></>
        }
      </ContainerInstallments>
    </CommonPage>
  )
}