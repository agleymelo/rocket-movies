import * as S from './styles'

export function Input({ icon: Icon, ...rest }) {
  return (
    <S.Container>
      {icon && <Icon />}
      <input {...rest} />
    </S.Container>
  )
}
