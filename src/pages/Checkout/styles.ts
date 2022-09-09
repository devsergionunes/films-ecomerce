import { Grid } from "@mui/material";
import styled, { css } from "styled-components";

export const Conteiner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    background: ${theme.background.default};
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  width: 70%;
  height: inherit;
  margin: 2.5rem auto 0 auto;
  display: flex;
  gap: 4rem;

  @media (max-width: 667px) {
    width: 100%;
    gap: 1rem;
    padding: 0 1rem 2rem 1rem;
    flex-direction: column;
  }
`;

export const BoxLeft = styled(Grid)`
  flex: 1;
  height: min-content;
`;

export const BoxRight = styled.div`
  flex: 1;
  margin-top: 2.5rem !important;
  display: flex;
  flex-direction: column;
`;

export const BoxItemCheckout = styled(Grid)`
  width: 100%;
  height: min-content;

  & + & {
    padding-top: 1rem;
  }
`;

export const BoxImage = styled.div<{ url: string }>`
  ${({ url }) => css`
    width: 80px;
    height: 80px;
    background-image: url(${url});
    background-clip: content-box;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 667px) {
      width: 60px;
      height: 60px;
    }
  `}
`;
