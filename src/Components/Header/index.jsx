import { Container, User } from "./styles"
import { Input } from "../Input"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <Container>
      <h1>RocketNotes</h1>
      <input type="text" placeholder="Pesquisar por título" />
      <User>
        <div className="container">
          <Link to="/profile">
            <span>Lucas Saymon</span>
          </Link>
          <Link href="/authroutes/">
            Sair
          </Link>
        </div>

        <Link to="/profile">
          <img src="https://github.com/lucassaymon1.png" alt="Foto do perfil" width="64px" />

        </Link>
      </User>
    </Container>
  )

}