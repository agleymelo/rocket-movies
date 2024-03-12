import { Link } from 'react-router-dom'

import { Input } from '../../component/Input'
import { Textarea } from '../../component/Textarea'

import * as S from './styles'

export function New() {
  return (
    <S.Container>
      <Link to="/">Voltar</Link>

      <S.Form>
        <h2>Novo Filme</h2>

        <S.InputWrappers>
          <Input placeholder="Título" type="text" />
          <Input placeholder="Sua nota (de 0 a 5)" type="number" />
        </S.InputWrappers>

        <Textarea placeholder="Observações" />
      </S.Form>
    </S.Container>
  )
}
