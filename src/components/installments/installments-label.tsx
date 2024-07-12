import { Typography } from "@mui/material"

interface InstallmentsLabelProps {
  text?: string
}

export const InstallmentsLabel = (props: InstallmentsLabelProps) => {
  const { text } = props
  return text ? (
    <div style={{
      padding: "0.1rem 1rem",
      backgroundColor: "#E5E5E5",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "1.5rem",
      left: "2rem",
      marginTop: "-1.3rem"
    }}>
      <Typography
        variant="h6"
        color="textPrimary"
        fontFamily={'Nunito'}
        fontWeight={800}
        component="div"
        fontSize={16}
      >
        {props.text}
      </Typography>
    </div>
  ) : null
}