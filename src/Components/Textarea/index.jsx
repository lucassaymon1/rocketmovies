import { Container } from "./style"

export function Textarea({ icon: Icon, value, ...rest }) {
  return (

    <Container>
      {Icon && <Icon size={20} />}
      <textarea cols="30" rows="10" {...rest}></textarea>
    </Container>
  )
}