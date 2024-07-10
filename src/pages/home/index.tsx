import { Box } from '@mui/material';
import logo from '../../../public/Logo.png';
import styles from './home.module.css'

export const Home = () => {

  return (
    <main
      className={styles.main}
    >
      <Box
        mt={4}
      >
        <img src={logo} alt='logo' />
      </Box>

      <section>

      </section>
    </main>
  )
}

