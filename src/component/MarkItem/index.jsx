import { FiPlus, FiX } from 'react-icons/fi'

import * as S from './styles'

export function MarkItem({ value, isNew = false, onClick, ...rest }) {
  return (
    <S.Container $isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </S.Container>
  )
}
