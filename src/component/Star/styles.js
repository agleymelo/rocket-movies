import styled from 'styled-components'

import { FiStar } from 'react-icons/fi'

export const Container = styled(FiStar)`
  font-size: 1.6rem;

  color: ${({ theme }) => theme.COLORS.PINK};

  stroke: ${({ theme, $isStared }) => $isStared ? theme.COLORS.PINK : ""};
  fill: ${({ theme, $isStared }) => $isStared ? theme.COLORS.PINK : ""};

`
