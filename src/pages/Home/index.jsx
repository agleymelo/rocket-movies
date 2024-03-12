import { Header } from '../../component/Header'
import { Button } from '../../component/Button'

import * as S from './styles'
import { Card } from '../../component/Card'

export function Home() {
  return (
    <S.Container>
      <Header />

      <S.Main>
        <S.ContentHeader>
          <h3>Meus Filmes</h3>

          <Button title="Adicionar Filme" />
        </S.ContentHeader>

        <S.SectionCard>
          <Card />
        </S.SectionCard>
      </S.Main>
    </S.Container>
  )
}
