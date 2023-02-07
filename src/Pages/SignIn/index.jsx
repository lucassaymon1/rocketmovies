import { Link } from "react-router-dom"

import { Container, Background } from "./styles"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"
import { FiMail, FiLock } from "react-icons/fi"

export function SignIn() {
  return (
    <Container>
      <form action="">
        <div className="form-header">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
          <h3>Faça seu login</h3>

        </div>
        <div className="input-wrapper">
          <Input type="text" placeholder="E-mail" icon={FiMail} />
          <Input type="password" placeholder="Senha" icon={FiLock} />

        </div>
        <Button title="Entrar" />

        <ButtonText to="/register" id="sign-up" title="Criar conta" />
      </form>
      <Background />
    </Container>
  )
}