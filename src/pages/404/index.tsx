import { styled } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ContainerNotFound = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`
export const ImgNotFound = styled('img')`
  margin-top: 6rem;
  width: 90%;
  max-width: 24rem;
  height: 15rem;
`

export const NotFoundTitle = styled('h1')`
  font-size: 1.5rem;
  font-weight: 600;
  color: #444;
  margin-top: 1rem;
`

export const NotFoundText = styled('p')`
  font-size: 1rem;
  font-weight: 400;
  color: #555;
  margin-top: 1rem;
`

export const NotFound = () => {

  const navigate = useNavigate()

  useEffect(() => {
    let trash = null
    if (!trash) {
      trash = setTimeout(() => {
        navigate('/')
      }, 3000)
    }
    return () => clearTimeout(trash)
  }, [])

  return (
    <ContainerNotFound>
      <ImgNotFound src="404-img.png" alt="404" />
      <NotFoundTitle>
        Algo deu errado
      </NotFoundTitle>
      <NotFoundText>
        Você sera redirecionado para a página inicial
      </NotFoundText>
    </ContainerNotFound>
  )
}