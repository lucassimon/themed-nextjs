import * as S from './styles'
import { useTheme } from '../../contexts/ThemeContext'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  const theme = useTheme()
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
        <S.Button
          onClick={() => {
            console.log('click')
            theme.toggle()
          }}
        >
          {theme.mode === 'dark'
            ? 'Switch to Light Mode'
            : 'Switch to Dark Mode'}
        </S.Button>
      </p>
    </S.Wrapper>
  )
}

export default Main
