import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  resize: none;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  padding: 1.9rem 1.6rem;

  font-size: 1.6rem;

  border: none;
`