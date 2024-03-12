import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 1rem;
  border-radius: 0.8rem;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`
