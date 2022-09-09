import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import styled, { css } from "styled-components";

export const Container = styled(Backdrop)`
  ${({ theme }) => css`
    z-index: 9999;
    color: ${theme.background.paper};
  `}
`;

export const Progress = styled(CircularProgress)`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
  `}
`;

export const ContainerLoadingIntoComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
