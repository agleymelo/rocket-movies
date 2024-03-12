import * as S from './styles'

export function Button({ title, isLoading = false, ...rest }) {
  return (
    <S.Container type="button" disabled={isLoading} {...rest}>
      {isLoading ? 'Carregando' : title}
    </S.Container>
  )
}
