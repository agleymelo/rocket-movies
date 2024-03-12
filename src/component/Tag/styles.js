import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.GRAY_10O};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: .6rem 1.6rem;

  font-size: 1.2rem;

  border-radius: 0.8rem;
`