import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';

  overflow-y: hidden;

`
export const Form = styled.form`

  grid-area: content;

  max-width: 113.7rem;
  width: 100%;
  height: 100%;

  margin: 4rem auto 0;

  > a {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    margin-top: 2.4rem;

    font-size: 3.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const InputWrappers = styled.div`
  margin: 4rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

`
