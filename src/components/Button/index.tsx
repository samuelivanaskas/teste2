import { ButtonLink } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const ButtonHome = ({ children, size = 'small' }: Props) => (
  <ButtonLink size={size}>{children}</ButtonLink>
)

export default ButtonHome
