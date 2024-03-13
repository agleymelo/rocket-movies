import * as S from './styles'

export function Star({ isStared = false }) {
  return <S.Container $isStared={isStared} />
}
