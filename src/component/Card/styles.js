import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 22.2rem;

  padding: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_ALPHA};
  border-radius: 0.8rem;

  & + div {
    margin-top: 2.4rem;
  }
`

export const Title = styled.strong`
  font-size: 2.4rem;
  font-weight: 800;

  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 0.8rem;
`

export const Stars = styled.div`
  margin-bottom: 1.6rem;

  > svg {
    font-size: 1.2rem;

    stroke: ${({ theme }) => theme.COLORS.PINK};
  }

  .stared {
    stroke: ${({ theme }) => theme.COLORS.PINK};
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Content = styled.p`
  font-size: 1.6rem;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Tags = styled.section`
  margin-top: 1.6rem;

  display: flex;

  gap: .8rem;
`