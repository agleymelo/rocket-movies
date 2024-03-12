import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  padding: 0 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h3 {
    text-wrap: nowrap;

    font-size: 2.4rem;
    font-weight: 800;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 0.8rem;

    display: flex;
    flex-direction: column;

    text-align: right;
    text-wrap: nowrap;

    > strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`