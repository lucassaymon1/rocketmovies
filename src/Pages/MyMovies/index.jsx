import { Container } from "./styles";
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { MovieContainer } from "../../Components/MovieContainer";
import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

export function MyMovies() {
  return (
    <Container>
      <Header />
      <main>
        <div className="header-section">
          <h1>Meus filmes</h1>
          <Link id="link" to="/new">
            <Button icon={FiPlus} title="Adicionar filme" />
          </Link>

        </div>
        <MovieContainer to="/" />
        <MovieContainer to="/preview/2" />
        <MovieContainer to="/preview/3" />
      </main>
    </Container>
  )
}