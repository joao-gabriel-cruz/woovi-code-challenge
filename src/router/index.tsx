import { RouterProvider } from "react-router-dom"
import { routers } from "./router"

export const Router = () => {
  return <RouterProvider
    router={routers}
  />
}