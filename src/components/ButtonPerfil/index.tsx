import { ButtonPerfilBar } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const ButtonPerfil = ({ children, size = 'big' }: Props) => (
  <ButtonPerfilBar size={size}>{children}</ButtonPerfilBar>
)
export default ButtonPerfil
