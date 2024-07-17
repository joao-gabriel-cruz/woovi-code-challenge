import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { QRCode } from "../pages/qr-code";
import { Payment } from "../pages/payment";
import { NotFound } from "../pages/404";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/qr-code",
    element: <QRCode />,
    errorElement: <NotFound />
  },
  {
    path: "payment-rest",
    element: <Payment />,
    errorElement: <NotFound />
  },
]);