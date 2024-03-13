import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';
`

export const Content = styled.main`
  grid-area: content;

  max-width: 113.7rem;
  width: 100%;

  margin: 4rem auto 0;

  > a {
    display: flex;
    align-items: center;
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const MovieDetails = styled.section`
  margin-top: 2.4rem;

  display: flex;
  flex-direction: column;
`

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1.9rem;

  > h2 {
    font-size: 3.6rem;
    font-weight: 800;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    display: flex;
    gap: 1rem;
  }
`

export const MovieNoteAuthor = styled.div`
  margin-top: 2.4rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > p {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    time {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const AuthorProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
  }

  > span {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const MovieTags = styled.section`
  margin: 4rem 0;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const MovieText = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  text-align: justify;

  & + p {
    margin-top: 1.6rem;
  }
`