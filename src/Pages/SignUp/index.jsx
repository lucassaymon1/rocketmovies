import { Container, Background } from "./styles"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { HiArrowLeft } from "react-icons/hi"

export function SignUp() {
  return (
    <Container>
      <form action="">
        <div className="form-header">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
          <h3>Crie sua conta</h3>

        </div>
        <div className="input-wrapper">
          <Input type="text" placeholder="Nome" icon={FiUser} />
          <Input type="text" placeholder="E-mail" icon={FiMail} />
          <Input type="password" placeholder="Senha" icon={FiLock} />

        </div>
        <Button title="Cadastrar" />

        <ButtonText to="/" icon={HiArrowLeft} id="sign-up" title="Voltar para o login" />
      </form>
      <Background />
    </Container>
  )
}