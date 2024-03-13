import styled from 'styled-components'

export const Container = styled.div`
  > header {
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.PINK_ALPHA};

    display: flex;
    align-items: center;

    padding: 0 14.4rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 33.6rem;
  width: 100%;

  margin: 0 auto;

  div:nth-child(3) {
    margin-bottom: 2.4rem;
  }
`

export const Profile = styled.div`
  position: relative;

  margin-top: -10rem;
  margin-bottom: 6.4rem;

  margin: -10rem auto 6.4rem;

  height: 18.6rem;
  width: 18.6rem;

  > img {
    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`
