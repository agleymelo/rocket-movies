import styled from 'styled-components'

import { Button } from '../../component/Button'

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
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

`

export const Section = styled.section`
  margin-top: 2rem;

  > h2 {
    font-size: 2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  
  > div {
    margin-top: 2.4rem;
    
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 1.6rem;

    display: flex;
    align-items: center;
    gap: 2.4rem;

    border-radius: 1rem;
  }
`

export const Buttons = styled.section`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 4rem;
  
`

export const ButtonDelete = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;
`