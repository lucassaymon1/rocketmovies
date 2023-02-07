import { Container } from "./styles";

export function Button({ icon: Icon, isNew, title, ...rest }) {
  return (
    <Container type="button" isNew={isNew} >
      {Icon && <Icon color="#1C1B1E" />}
      {title}
    </Container>
  )
}