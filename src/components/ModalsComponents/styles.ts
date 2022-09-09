import { Modal as ModalMUI, Fade as FadeMUI } from "@mui/material";
import styled, { css } from "styled-components";

export const Modal = styled(ModalMUI)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
`;

export const Fade = styled(FadeMUI)`
  ${({ theme }) => css`
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: ${theme.background.default};
    marginbottom: 1rem;
    position: relative;
  `}
`;
