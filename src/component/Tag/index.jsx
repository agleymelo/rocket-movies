import * as S from './styles'

export function Tag({ title, ...rest }) {
  return <S.Container {...rest}>{title}</S.Container>
}
