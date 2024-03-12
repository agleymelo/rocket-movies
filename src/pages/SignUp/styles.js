import styled from "styled-components";

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 16.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 800;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    align-self: left;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  > h2 {
    margin: 4.8rem 0;

    font-size: 2.4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > a {
    margin-top: 4.2rem;

    text-decoration: none;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-items: center;
    gap: 0.8rem;

    > svg {
      font-size: 1.6rem;
    }
  }
`

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`