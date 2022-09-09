import { Drawer } from "@mui/material";
import styled, { css } from "styled-components";

export const DrawerContainer = styled(Drawer)`
  width: 350px;

  @media (max-width: 667px) {
    width: 100vw;
  }
`;

export const Container = styled.div`
  width: 350px;
  height: inherit;
  margin: 0 auto;

  @media (max-width: 667px) {
    width: 100vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: inherit;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const ButtonHeader = styled.div`
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: flex-end;

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.palette.primary.main};
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const Body = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
`;

export const BoxProduct = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p,
  span {
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const BoxProductImage = styled.div<{ src: string }>`
  ${({ src }) => css`
    width: 50px;
    height: 50px;
    background-image: url(${src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
  `}
`;

export const Footer = styled.div`
  align-self: flex-end;
  margin-top: auto;
  width: 100%;
  padding: 1rem;
`;
