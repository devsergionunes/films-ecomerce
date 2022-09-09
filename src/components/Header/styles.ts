import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: center;
    background-color: ${theme.palette.primary.main};
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
`;

export const BoxLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 60px;
  }
`;

export const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  height: 100%;

  & > div {
    width: 400px;
  }

  @media screen {
    @media (max-width: 667px) {
      & > div {
        width: 100%;
      }
    }
  }
`;

export const BoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;

  @media (max-width: 667px) {
    gap: 0;
  }
`;
