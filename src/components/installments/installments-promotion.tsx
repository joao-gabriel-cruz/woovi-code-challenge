import { styled, Typography } from "@mui/material"

const InstallmentsPromotionContainer = styled('div')({
  width: '95%',
  display: 'flex',
  alignItems: 'center',
  margin: '0.5rem',
  backgroundImage: `url('flag.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0.2rem',
})


export interface InstallmentsPromotionProps {
  text?: string
}

export const InstallmentsPromotion = (props: InstallmentsPromotionProps) => {
  const { text } = props

  return text ? (
    <InstallmentsPromotionContainer>
      <Typography color="white" fontFamily={'Nunito'} fontWeight={600} component="div" fontSize={14} pl={2}>
        {text}
      </Typography>
    </InstallmentsPromotionContainer>
  ) : null
}