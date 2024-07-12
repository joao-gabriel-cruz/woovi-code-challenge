import { Box, Typography } from "@mui/material"
import styles from "./common.module.css"
import logo from '../../../public/Logo.png';
import React from "react";

interface CommonPageProps {
  children?: React.ReactNode
  title: string
}

export const CommonPage = (props: CommonPageProps) => {

  return (
    <main
      className={styles.main}
    >

      <Box
        mt={4}
      >
        <img src={logo} alt='logo' />
      </Box>
      <Typography
        fontFamily={'Nunito'}
        fontWeight={800}
        variant='h6'
        align='center'
        mt={4}
        mb={2}
        fontSize={24}
      >
        {props.title}
      </Typography>
      {props.children}
      <footer>
        <img src="../../../public/security.png" alt="" />
      </footer>
    </main>
  )
}