import { FiStar } from 'react-icons/fi'

import { Tag } from '../../component/Tag'

import * as S from './styles'
import { Star } from '../Star'

export function Card() {
  return (
    <S.Container>
      <S.Title>Interestellar</S.Title>
      <S.Stars>
        <Star isStared />
        <Star isStared />
        <Star />
      </S.Stars>

      <S.Content>
        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data
        desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
        acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem
        que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação
        gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo
        professor John Brand
      </S.Content>

      <S.Tags>
        <Tag title="Ficção Científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
      </S.Tags>
    </S.Container>
  )
}
