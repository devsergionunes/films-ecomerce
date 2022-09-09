import { Box } from "@mui/material";
import styled, { css } from "styled-components";

export const Conteiner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    background: ${theme.background.default};
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin-top: 9vh;
`;

export const ContainerMovies = styled.div`
  width: 70%;
  margin: 2.5rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2.5rem;
`;

export const CardMovies = styled(Box)`
  height: 380px;
  max-width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;

  border: 1px solid #e0e0e0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardMoviesHeader = styled.div<{ url: string }>`
  ${({ url }) => css`
    width: 100%;
    height: 65%;
    min-height: 60%;
    max-height: 65%;
    max-width: 100%;
    position: relative;

    background-image: url(${url});
    background-clip: content-box;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.5rem 0.5rem 0 0;
  `}
`;

export const CardMoviesBody = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;

  & > div {
    max-width: 100%;
  }

  h6 {
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const BoxButtonFavorite = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const BoxBackDrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const BoxDataLancamento = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    padding: 0.5rem 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 0.875rem;
      color: ${theme.text.with};
    }
  `}
`;
