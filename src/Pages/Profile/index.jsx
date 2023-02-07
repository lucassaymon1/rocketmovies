import { Container } from "./styles";
import { Input } from "../../Components/Input";
import { ButtonText } from "../../Components/ButtonText";
import { Button } from "../../Components/Button";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi"

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText to="/" icon={HiOutlineArrowLeft} title="Voltar" />
      </header>
      <main>
        <div className="user-photo">
          <img src="https://github.com/lucassaymon1.png" alt="User photo" width="186px" />
          <label htmlFor="photo">
            <input type="file" id="photo" accept="image/*" />
            <FiCamera></FiCamera>
          </label>
        </div>

        <form action="">
          <div className="username">
            <Input type="text" readOnly icon={FiUser} value="Lucas Saymon Oliveira de Aragão" />
            <Input type="text" readOnly icon={FiMail} value="lucasoliveira@gmail.com" />

          </div>

          <div className="password">
            <Input type="text" icon={FiLock} placeholder="Senha atual" />
            <Input type="text" icon={FiLock} placeholder="Nova senha" />
          </div>

          <Button title="Salvar" />


        </form>
      </main>
    </Container>
  )
}