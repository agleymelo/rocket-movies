import { Tag } from '../../component/Tag'

import { Star } from '../Star'

import * as S from './styles'

export function Card({ data, ...rest }) {
  let stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= data.rating) {
      stars.push(<Star key={i} isStared />)
    } else {
      stars.push(<Star key={i} />)
    }
  }

  return (
    <S.Container {...rest}>
      <S.Title>{data.title}</S.Title>
      <S.Stars>{data.rating && stars}</S.Stars>

      <S.Content>{data.description}</S.Content>

      <S.Tags>
        {data.tags.map((tag) => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </S.Tags>
    </S.Container>
  )
}
