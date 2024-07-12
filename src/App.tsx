import { useContext } from 'react';
import './App.css'
import { Home } from './pages/home';
import { QRCode } from './pages/qr-code';
import { PaymentContext } from './context/payment-context';
import { Payment } from './pages/payment';

function App() {
  const { page } = useContext(PaymentContext)
  switch (page) {
    case 1:
      return <Home />
    case 2:
      return <QRCode />
    case 3:
      return <Payment />
    default:
      return <p>
        Página não encontrada
      </p>
  }
}

export default App
