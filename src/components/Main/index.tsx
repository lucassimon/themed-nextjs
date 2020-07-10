import * as S from './styles'
import { useTheme } from '../../contexts/ThemeContext'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  const { mode, toggle } = useTheme()
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
      <p>
        <S.Button onClick={toggle}>
          {mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </S.Button>
      </p>
    </S.Wrapper>
  )
}

export default Main
