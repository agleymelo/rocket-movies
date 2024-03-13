import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../component/Input'
import { Textarea } from '../../component/Textarea'
import { Header } from '../../component/Header'

import * as S from './styles'
import { MarkItem } from '../../component/MarkItem'

export function New() {
  return (
    <S.Container>
      <Header />

      <S.Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>

        <h2>Novo Filme</h2>

        <S.InputWrappers>
          <Input placeholder="Título" type="text" />
          <Input placeholder="Sua nota (de 0 a 5)" type="number" />
        </S.InputWrappers>

        <Textarea placeholder="Observações" />

        <S.Section>
          <h2>Marcadores</h2>

          <div>
            <MarkItem value="React" />
            <MarkItem isNew placeholder="Novo marcador" />
          </div>
        </S.Section>
      </S.Form>
    </S.Container>
  )
}
