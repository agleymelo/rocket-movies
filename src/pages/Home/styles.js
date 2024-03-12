import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';
`

export const Main = styled.main`
  grid-area: content;

  max-width: 113.7rem;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  overflow-y: auto;
`

export const ContentHeader = styled.header`
  margin: 5rem 0 4rem 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h3 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {
    width: 20.7rem;
  }
`

export const SectionCard = styled.section``