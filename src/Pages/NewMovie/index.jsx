import { Container } from "./styles"
import { Header } from "../../Components/Header"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { TagSection } from "../../Components/TagSection"
import { NoteItem } from "../../Components/NoteItem"

export function NewMovie() {
  return (
    <Container>
      <Header />
      <main>

        <ButtonText to="/" icon={HiOutlineArrowLeft} title="Voltar" />

        <h1>Novo filme</h1>
        <form>
          <div className="section">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />

          </div>

          <div className="section">
            <Textarea placeholder="Observações" />

          </div>

          <h2>Marcadores</h2>

          <TagSection>
            <NoteItem value="React" />
            <NoteItem isNew placeholder="Novo marcador" />
          </TagSection>

          <div className="section">
            <Button title="Salvar" />
            <Button title="Excluir" isNew />

          </div>



        </form>
      </main>

    </Container>

  )
}